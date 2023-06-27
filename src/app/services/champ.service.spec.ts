import { HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { inject } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ChampService } from "./champ.service";

describe('ChampService', () =>{
    beforeEach(async () => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,]
    }));

    it('should be created', () => {
        const service: ChampService = TestBed.get(ChampService);
        expect(service).toBeTruthy()
    });
    
})