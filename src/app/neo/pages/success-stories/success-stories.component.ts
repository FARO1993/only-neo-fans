import { Component } from '@angular/core';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent {
  testimonials = [
    {
      isLearnMore: false,
      clientName: 'Emily',
      review: 'My name is Emily, and I am a passionate content creator on Instagram. One day, I caught the attention of a special agency called OnlyNeoFans, which was quick to notice my authenticity, beauty, and dedication. They valued the quality of content and effort put in by their models, and I was no exception....',
      other: 'Right from the beginning, I noticed the exceptional treatment I received from OnlyNeoFans. They genuinely cared for each model and provided personalized attention to ensure our success. Their team of experts stood by my side, offering guidance and resources to enhance my content and expand my reach. The hallmark of OnlyNeoFans is their high-performance work ethic. They prioritize quality and strategy, leading to exponential growth in my account. My number of followers skyrocketed, and my content became more popular than ever before. Thanks to the unwavering support of OnlyNeoFans, I achieved high annual earnings. This financial success granted me the freedom to invest in personal projects and pursue my dreams beyond the platform. I was also able to support my family and contribute to various charitable causes that deeply resonated with me. My success story became a source of inspiration for other models, who joined OnlyNeoFans in pursuit of their own triumphs. The agency continued to stand out for its focus on the well-being of its models, fostering a positive work environment based on mutual respect. Through my journey with OnlyNeoFans, I found not only financial prosperity but also a community that uplifted and supported me. I will always be grateful for the opportunities and growth that this remarkable agency has provided me.'
    },
    {
      isLearnMore: false,
      clientName: 'Cele',
      review: 'I stood out for my creativity and authenticity in the content I shared on Instagram. As my follower base grew, I knew it was time to take my career to the next level by exploring new avenues of self-expression. Thats when I discovered OnlyNeoFans, an agency renowned for its exceptional treatment and impressive results in helping models establish successful OnlyFans accounts.',
      other: 'Thanks to the strategic focus and unwavering support of OnlyNeoFans, my career underwent a transformation as I ventured into OnlyFans. My content continued gaining rapid popularity on Instagram, and now, with the launch of my OnlyFans account, I was able to connect with a more devoted and engaged audience. With OnlyNeoFans guidance, I diversified my content, ensuring that my OnlyFans account reflected my genuine self while maintaining the highest level of professionalism. As a result, my OnlyFans account quickly attracted subscribers and generated significant revenue. My success on OnlyFans granted me a level of financial independence I never thought possible. The increased earnings from my OnlyFans account allowed me to invest in personal projects, support my family, and pursue my passions outside of the platform.'
    }
    // Agrega más reseñas de clientes aquí
  ];

  toggleLearnMore(testimonial: any): void {
    testimonial.isLearnMore = !testimonial.isLearnMore;
  }
}
