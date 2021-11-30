import * as React from "react";
import * as ReactTestRenderer from "react-test-renderer";
import { EditableTable } from ".";
import { Dev } from "../models/Dev";

describe("EditableTable", () => {
    it("should render with zero devs", () => {
        const mockView = () => { };
        const mockEdit = () => { };
        const mockDelete = () => { };
        const devs = [];

        const editableTable = ReactTestRenderer.create(<EditableTable devs={devs} view={mockView} edit={mockEdit} delete={mockDelete} />);

        expect(editableTable).toMatchSnapshot();
    });
    it("should render with one dev", () => {
        const mockView = () => { };
        const mockEdit = () => { };
        const mockDelete = () => { };
        const devs: Dev[] = [{ id: 1, firstName: "first", lastName: "last" }];

        const editableTable = ReactTestRenderer.create(<EditableTable devs={devs} view={mockView} edit={mockEdit} delete={mockDelete} />);

        expect(editableTable).toMatchSnapshot();
    });
    it("should render with two devs", () => {
        const mockView = () => { };
        const mockEdit = () => { };
        const mockDelete = () => { };
        const devs: Dev[] = [
            { id: 1, firstName: "first", lastName: "last" },
            { id: 2, firstName: "first", lastName: "last" }
        ];

        const editableTable = ReactTestRenderer.create(<EditableTable devs={devs} view={mockView} edit={mockEdit} delete={mockDelete} />);

        expect(editableTable).toMatchSnapshot();
    });
    it("should render with three devs", () => {
        const mockView = () => { };
        const mockEdit = () => { };
        const mockDelete = () => { };
        const devs: Dev[] = [
            { id: 1, firstName: "first", lastName: "last" },
            { id: 2, firstName: "first", lastName: "last" },
            { id: 3, firstName: "first", lastName: "last" }
        ];

        const editableTable = ReactTestRenderer.create(<EditableTable devs={devs} view={mockView} edit={mockEdit} delete={mockDelete} />);

        expect(editableTable).toMatchSnapshot();
    });
});