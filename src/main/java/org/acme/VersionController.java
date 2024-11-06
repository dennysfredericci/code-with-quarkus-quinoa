package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import java.util.Map;

@Path("/version")
public class VersionController {
    private final String version;
    public VersionController(@ConfigProperty(name = "quarkus.application.version") String version) {
        this.version = version;
    }
    
    @GET
    public Map<String, String> getVersion() {
        return Map.of("version", this.version);
    }
    
}
