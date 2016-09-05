import {Component, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

@Component({
    selector: "badge-bcomponent",
    templateUrl: "badge.bcomponent.html",
    inputs: BComponentInputs
})
export class BadgeBComponent extends BComponent {
    @Input() value: number = 0;

    constructor() {
        super("badge");
    }

    public Initialize = (value: number = 0): BadgeBComponent => {
        this.value = value;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    public setValue = (value: number) => {
        this.value = value;
    }

    private isNumer = (): boolean => {
        return typeof this.value === 'number';
    }

    public increment = (by: number = 1) => {
        if(this.isNumer()) { this.value += by; }
    }

    public decrement = (by: number = 1) => {
        if(this.isNumer()) { this.value -= by; }
    }
}