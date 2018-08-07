import { HttpClient, HttpClientConstructor, Inject, ServiceLocator } from "@omnia/fx";
import { Guid } from '@omnia/fx/models';

export class TestService {
    @Inject<HttpClientConstructor>(HttpClient,
        { configPromise: HttpClient.createOmniaRequestConfig(new Guid("03df96b6-c29d-4d45-ba79-d84b8bee9b2c")) }) private httpClient: HttpClient;

    public getData(): any {
        return this.httpClient.get("/api/test/dummy");        
    }

}