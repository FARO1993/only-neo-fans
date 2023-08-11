import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent {
  managements = [
    {
      title: 'Onlyfans management',
      text: 'Full account management is provided by the agency and is adapted to your requirements. Our skilled account managers handle the bulk of the work and you can concentrate creating content and earning money.'
    },
    {
      title: 'Account growth and promotion',
      text: 'Your social accounts will grow as a result of our skilled social media management team, and paid promotion strategies, increasing your subscriber count and income.'
    },
    {
      title: 'Scheduling',
      text: 'As part of your customized distribution plan, we handle all of the content scheduling on OnlyFans and other social media platforms.'
    },
    {
      title: 'Texting management',
      text: 'Our team is specialized in high revenue chatting. We can chat with your subs every day and you can have time off, seamlessly integrating your voice and brand.'
    },
    {
      title: 'Account strategies and Personal branding',
      text: 'Utilize a custom-made content and promotion strategy to appeal to your current audience and draw in new subscribers in order to capitalize on your distinctive brand. We assist you in developing your creator persona and any necessary graphic assets.'
    },
    {
      title: 'Stadistics consulting',
      text: 'Our team is great in the area of stadistics because we have a great data scientist manager. You can track your own data and we can draw conclusions through it in order to grow your audience and maximize your subs and earnings.'
    }
  ];
}
