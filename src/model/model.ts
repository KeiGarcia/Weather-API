import db from "../database/database.json";


const getHourlyTemperatureAndHumidity = () => {
    return db.timelines.hourly.map(e => {
        return {
            time: e.time,
            humidity: e.values.humidity,
            temperature: e.values.temperature
        }
    })
}


const getPressureLevelByTemperature = (temperature: number) => {
    const dbTemperatureFilter = db.timelines.hourly.
        filter(e => e.values.temperature >= temperature).
        map(e => {
            return {
                pressureSurfaceLeve: e.values.pressureSurfaceLevel,
                temperature: e.values.temperature
            }
        })

    return dbTemperatureFilter;
}

export { getHourlyTemperatureAndHumidity, getPressureLevelByTemperature };