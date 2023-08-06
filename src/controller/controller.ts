import * as model from "../model/model"

const getHourlyTemperatureAndHumidity = () => model.getHourlyTemperatureAndHumidity()
const getPressureLevelByTemperature = (temperature: number) => model.getPressureLevelByTemperature(temperature)

export {getHourlyTemperatureAndHumidity, getPressureLevelByTemperature}