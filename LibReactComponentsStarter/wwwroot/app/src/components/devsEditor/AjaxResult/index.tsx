﻿import * as React from "react";
import { AjaxResultProps } from "./props";

export class AjaxResult extends React.Component<AjaxResultProps> {
    constructor(props: AjaxResultProps) {
        super(props)
    }

    render() {
        return <div>
            <div className="h4" style={{ display: "inline" }}>Ajax Result:</div>{" "}
            <div style={{ display: "inline" }}>{this.props.result}</div>
        </div>
    }
}