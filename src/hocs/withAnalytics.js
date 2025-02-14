import React, { Component } from 'react';
import { loadGetInitialProps } from "next/dist/lib/utils";
import ReactGA from 'react-ga'

export default () => Composed =>
    class extends Component {
        static getInitialProps(ctx) {
            return loadGetInitialProps(Composed, ctx)
        }

        componentDidMount() {
            ReactGA.initialize('ID_Analytics');
            ReactGA.pageview(window.location.pathname);
        }

        render() {
            return <Composed {...this.props} />
        }
    }