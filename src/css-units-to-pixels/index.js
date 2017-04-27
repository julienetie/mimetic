import CSSFixedUnits from './css-fixed-units';
import CSSUnits from './css-units';
import { isNumber } from '../utilities';


const aliasValueToPX = value => CSSFixedUnits.filter(
    metricInfo => value === metricInfo.unit).shift().PXValue;


const CSSUnitsToPixels = (value) => {
    if (isNumber(value)) {
        return value;
    }
    const suffix = value.replace(/[^a-z]+/gi, '');
    const numberValue = value.replace(/[^\d.]*/g, '');
    const metricInfo = CSSUnits.filter(
        info => suffix === info.unit).shift();
    const PXValue = metricInfo ? numberValue * metricInfo.PXFactor : aliasValueToPX(value);
    return parseInt(PXValue, 10);
};


export default CSSUnitsToPixels;
