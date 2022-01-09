import React from 'react';

const withModuleErrorBoundary = WrappedComponent => {
  return class ModuleErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
      }
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo)
    }

    rerenderModule = () => {
      this.setState({ hasError: false });
    }

    render() {
      const { hasError } = this.state;

      if (hasError) {
        return (
          <div>
            <p>An error occurred please try again later.</p>
            <button type="button" onClick={this.rerenderModule}>
              Retry
            </button>
          </div>
        )
      }

      return <WrappedComponent {...this.props} />
    }
  }
}

export default withModuleErrorBoundary;