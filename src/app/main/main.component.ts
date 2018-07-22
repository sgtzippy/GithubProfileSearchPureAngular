import { Component, OnInit } from '@angular/core';

import { SearchProfileServiceService } from '../services/search-profile-service.service';

import { ProfileSearchResponse } from '../models/profile-search-response';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    private profileSearchResponse: ProfileSearchResponse;
    private error: string;

	constructor(private searchProfileServiceService: SearchProfileServiceService) { }

	ngOnInit() {
	}

    search(query: string): void {
        this.searchProfileServiceService.searchProfiles(query)
            .subscribe(
                response => {
                    this.profileSearchResponse = response;
                    this.error = null;
                },
                error => {
                    this.error = error;
                    this.profileSearchResponse = null;
                }
            );
    }
}
