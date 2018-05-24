"use strict" // parent container wasn't really necessary 
{
    const component = {
        template: `<p> {{ $ctrl.message }} </p>`,
        controller: "CalculatorController"
    };

    function CalculatorController() {
        const vm = this;
        vm.message = "My Super Nerdy Cool Calculator";
        vm.messageTwo ="asasdasd";
    }

    






    angular
        .module("CalculatorApp")
        .component("component", component)
        .controller("CalculatorController", CalculatorController)
}