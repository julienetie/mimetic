import CSSFixedUnits from './css-fixed-units';
import CSSUnits from './css-units';
import {isNumber} from '../utilities';


const aliasValueToPX = (value) => {
    return CSSFixedUnits.filter(function(metricInfo) {
        return value === metricInfo.unit;
    }).shift().PXValue;
}


const CSSUnitsToPixels = (value) => {

    if (isNumber(value)) {
        return value;
    }
    
    const suffix = value.replace(/[^a-z]+/gi, '');
    const numberValue = value.replace(/[^\d\.]*/g, '');

    const metricInfo = CSSUnits.filter(function(metricInfo) {
            return suffix === metricInfo.unit;
        })
        .shift();

    const PXValue = metricInfo ? numberValue * metricInfo.PXFactor : aliasValueToPX(value);
    
    return parseInt(PXValue);
}


export default CSSUnitsToPixels;
