import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"

/* import css */
import "../../sass/components/forecast.scss";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({data}) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.lenght).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
    <>
       <Accordion allowZeroExpanded>
            {data.list.splice(0, 5).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <label className="daily-item__day">{forecastDays[idx]}</label>
                                <label className="daily-item__description">{item.weather[0].description}</label>
                                <img src={require(`../../icon/${item.weather[0].icon}.png`)} className="icon-small" alt="weather" />
                                <label className="daily-item__min-max">{Math.round(item.main.temp_min)}°C</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>
            ))}
            
       </Accordion>
    </> 
    );
}

export default Forecast;