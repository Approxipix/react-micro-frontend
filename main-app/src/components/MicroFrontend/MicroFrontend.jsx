import React from 'react';
import withRouter from '../../hocs/withRouter';

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const promises = Object.keys(manifest['files'])
          .filter(key => key.endsWith('.js'))
          .reduce((sum, key) => {
            sum.push(
              new Promise(resolve => {
                const path = `${host}${manifest['files'][key]}`;
                const script = document.createElement('script');
                if (key === 'main.js') {
                  script.id = scriptId;
                }
                script.onload = () => {
                  resolve();
                };
                script.src = path;
                document.head.appendChild(script);
              })
            );
            return sum;
          }, []);
        Promise.allSettled(promises).then(() => {
          this.renderMicroFrontend();
        });
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    if (window[`unmount${name}`])  {
      window[`unmount${name}`](`${name}-container`)
    }
  }

  renderMicroFrontend = () => {
    const { name, window } = this.props;

    if (window[`render${name}`]) {
      window[`render${name}`](`${name}-container`, this.props)
    }
  };

  render() {
    return <div id={`${this.props.name}-container`} style={this.props.style} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window
};

export default withRouter(MicroFrontend);