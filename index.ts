import { TArchitectPlugin } from "@amphore-dev/architect";

const ArchitectPlugin: TArchitectPlugin = {
    // The blueprints and builders are used for the languages starting with the plugin name
    // (without the "architect-plugin-" prefix), or with "destination" if provided
    name: "architect-plugin",
    register(architect) {
        // Paths are relative to the plugin's package root
        architect.registerBlueprints("./blueprints");
        architect.registerBuilders("./builders");

        // Optionally, register new commands for Architect CLI
        architect.registerCommand("command-name", (args) => {
            console.log("Command imported from plugin with args:", args);
        });
    },
};

export default ArchitectPlugin;
