export interface IWeatherData {
    location: string;
    locationUrl: string;
    icon: string;
    weather: string;
    description: string;
    sunset: number;
    sunrise: number;
    temperature: number;
    feelsLike: number;
    humidity: number;
}