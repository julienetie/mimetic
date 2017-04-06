/**
 * Sets up mimetic via partial application.
 * @param {Function} initializeMimetic - Initalizes MIMETIC function.
 */
const mimeticPartial = (initializeMimetic, defaults) => {
    return (configurationObj) => {
        // Assing configuration as an object.
        const configuration = configurationObj ? configurationObj : {};


        // Merge configuration into defaults.
        const overriddenDefaults = Object.assign(defaults, configuration);


        // Prevent config mutations.
        const config = Object.freeze(overriddenDefaults);


        // Default load to DOMContentLoaded if not opted.
        const loadEventOption = config.loadEvent === 'load' ? 'load' : 'DOMContentLoaded';


        // Initalize mimetic on load.
        window.addEventListener(loadEventOption, () => initializeMimetic(config));


        // Return kill and revive methods.
        return {
            kill() {
                initializeMimetic.prototype.kill();
            },
            revive() {
                initializeMimetic.prototype.revive();
            }
        }
    }
}


export default mimeticPartial;
