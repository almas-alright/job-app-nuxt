import country_list from "static/country_list";

const inductions = [
  {
    title: 'In an emergency',
    slug: 'in-an-emergency',
    questions:[
      { quest: 'Can you leave without informing anyone?', ans: null },
      { quest: 'Leave windows and doors open when there is a fire?', ans: null },
      { quest: 'Call 000 in an emergency?', ans: null },
      { quest: 'Must understand all emergency procedures?', ans: null },
      { quest: 'Do you need to stay calm in an emergency?', ans: null },
    ]
  },
  {
    title: 'Safety',
    slug: 'safety',
    questions:[
      { quest: 'Do you need to wear your PPE every day?', ans: null },
      { quest: 'Can you leave equipment in walkways?', ans: null },
      { quest: 'Do you need to clean your work area clean?', ans: null },
      { quest: 'Does a safe lifting procedure need to be followed?', ans: null },
      { quest: 'Can you use the company\'s first Aid?', ans: null },
      { quest: 'You are able to walk any where within the company?', ans: null },
      { quest: 'Jewellery can be worn at work?', ans: null },
      { quest: 'You can any use equipment without authorisation?', ans: null },
    ]
  },
  {
    title: 'Equipment',
    slug: 'equipment',
    questions:[
      { quest: 'You have the right of way over forklifts?', ans: null },
      { quest: 'You can sit on a forklift at any time?', ans: null },
      { quest: 'You can overload a pallet jack if needed?', ans: null },
      { quest: 'You can repair equipment when your NOT qualified to do so?', ans: null },
      { quest: 'Can you use the company\'s first Aid?', ans: null },
      { quest: 'Are moving parts of machinery dangers?', ans: null },
      { quest: 'You can catch a knife that is falling?', ans: null },
      { quest: 'You can place your open knife in your pocket when not in use?', ans: null },
      { quest: 'You can towards yourself when needed?', ans: null },
      { quest: 'Food waste can go in any bin?', ans: null },
      { quest: 'you can work if you have been drink?', ans: null },
    ]
  },
  {
    title: 'Your Responsibility',
    slug: 'your-responsibility',
    questions:[
      { quest: 'If you see an accident happen you don’t need to inform your supervisor?', ans: null },
      { quest: 'Is it you responsibility to ask if in doubt?', ans: null },
      { quest: 'You can take shortcuts to do the job faster?', ans: null },
      { quest: 'Do you need to inform your supervisor if you can’t make it to work?', ans: null },
      { quest: 'Can you do a task that is unrelated to your position?', ans: null },
    ]
  }
]
export default inductions;
