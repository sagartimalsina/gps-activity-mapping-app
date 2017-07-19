import { Component, OnInit } from '@angular/core';
import {IActivity} from '../shared/activity.model';
import {ActivityService} from '../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: IActivity[];
  constructor(private _activityService: ActivityService ) { }


  ngOnInit() {
  }

}
