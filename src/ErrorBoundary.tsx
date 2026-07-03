import { Component, type ReactNode } from "react";
import { reportError } from "./report.ts";

export class ErrorBoundary extends Component<{ children: ReactNode }, { error?: Error }> {
  state: { error?: Error } = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    reportError("react", error);
  }

  render() {
    if (this.state.error)
      return <div className="state">Something broke: {this.state.error.message}</div>;
    return this.props.children;
  }
}
