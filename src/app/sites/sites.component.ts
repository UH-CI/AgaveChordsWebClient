import { Component, OnInit } from '@angular/core';
import { Site } from '../site';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  selectedSite: Site;

  sites: Site[];

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.getSites();
  }

  onSelect(site: Site): void {
    this.selectedSite= site;
  }

  getSites(): void {
    this.siteService.getSites()
        .subscribe(sites => this.sites = sites);
  }

}
