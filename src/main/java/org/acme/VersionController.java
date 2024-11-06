package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import org.eclipse.microprofile.config.inject.ConfigProperty;

@Path("/version")
public class VersionController {
    private final String version;
    public VersionController(@ConfigProperty(name = "quarkus.application.version") String version) {
        this.version = version;
    }
    
    @GET
    public String getVersion() {
        return this.version;
    }
    
}
