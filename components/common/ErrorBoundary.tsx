import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in CluelessAI component tree:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center bg-slate-900 border border-red-500/20 rounded-xl my-4">
          <h2 className="text-base font-semibold text-red-400">Rendering Error</h2>
          <p className="text-xs text-slate-400 mt-1">Unable to display this view. Please reload the console.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
