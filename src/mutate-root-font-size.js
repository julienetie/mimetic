import mutateRootFontSizePartial from './mutate-root-font-size-partial';
import defaults from './defaults';
import { getRootElement } from './utilities';

// Default root selector. Not an option.
const { rootSelector } = defaults;

// The root font element.
const rootElement = getRootElement(rootSelector);

/**
 * Mutate root font size with pre-sets.
 * @param {HTMLElement} rootElement - Root element option.
 * @param {Boolean} rootElement - Enable scale option.
 * @return {Function} mutateRootFontSize.
 */
const mutateRootFontSize = mutateRootFontSizePartial(rootElement);

export default mutateRootFontSize;