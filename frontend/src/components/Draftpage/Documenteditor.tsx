import React from 'react'
import {
    DocumentEditorComponent, DocumentEditorContainerComponent, Toolbar, CustomToolbarItemModel, Inject
    } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(Toolbar);
export default function Documenteditor() {
    return (
        <DocumentEditorContainerComponent id="container" height={'1000px'} enableToolbar={true}>
        <Inject services={[Toolbar]}></Inject>
        </DocumentEditorContainerComponent>
    );
}