import * as controller from "./controller/controller"

const main = (() => {
    const arrayHourTemperatureHumidity = controller.getHourlyTemperatureAndHumidity();
    const arrayPressureTemperature = controller.getPressureLevelByTemperature(19);

    console.table(arrayHourTemperatureHumidity);
    console.table(arrayPressureTemperature);
})()