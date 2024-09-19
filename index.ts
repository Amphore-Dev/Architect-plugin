import { TArchitectPlugin } from "@amphore-dev/architect";

const ArchitectPlugin: TArchitectPlugin = {
    name: "architect-plugin",
    register(architect) {
        architect.registerBlueprints(
            "<path/in/architect/blueprints>",
            "./blueprints"
        );

        architect.registerBuilders(
            "<path/in/architect/builders>",
            "./builders"
        );

        // Optionally, register new commands for Architect CLI
        architect.registerCommand("command-name", (args) => {
            console.log("Command imported from plugin with args:", args);
        });
    },
};

export default ArchitectPlugin;
