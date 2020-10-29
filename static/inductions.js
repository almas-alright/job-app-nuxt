import country_list from "static/country_list";

const inductions = [
  {
    title: 'In an emergency',
    slug: 'in-an-emergency',
    questions:[
      { quest: 'Can you leave without informing anyone?', ans: null, ca: 0 },
      { quest: 'Leave windows and doors open when there is a fire?', ans: null, ca: 0 },
      { quest: 'Call 000 in an emergency?', ans: null, ca: 1 },
      { quest: 'Must understand all emergency procedures?', ans: null, ca: 1 },
      { quest: 'Do you need to stay calm in an emergency?', ans: null, ca: 1 },
    ]
  },
  {
    title: 'Safety',
    slug: 'safety',
    questions:[
      { quest: 'Do you need to wear your PPE every day?', ans: null, ca: 0 },
      { quest: 'Can you leave equipment in walkways?', ans: null, ca: 0 },
      { quest: 'Do you need to keep your work area clean?', ans: null, ca: 1 },
      { quest: 'Does a safe lifting procedure need to be followed?', ans: null, ca: 1 },
      { quest: 'Can you use the company\'s first Aid?', ans: null, ca: 1 },
      { quest: 'You are able to walk any where within the company?', ans: null, ca: 0 },
      { quest: 'Jewellery can be worn at work?', ans: null, ca: 0 },
      { quest: 'You can any use equipment without authorisation?', ans: null, ca: 0 },
    ]
  },
  {
    title: 'Equipment',
    slug: 'equipment',
    questions:[
      { quest: 'You have the right of way over forklifts?', ans: null, ca: 0 },
      { quest: 'You can sit on a forklift at any time?', ans: null, ca: 0 },
      { quest: 'You can overload a pallet jack if needed?', ans: null, ca: 0 },
      { quest: 'You can repair equipment when your NOT qualified to do so?', ans: null, ca: 0 },
      { quest: 'Are moving parts of machinery dangers?', ans: null, ca: 1 },
      { quest: 'You can catch a knife that is falling?', ans: null, ca: 0 },
      { quest: 'You can place your open knife in your pocket when not in use?', ans: null, ca: 0 },
      { quest: 'You can towards yourself when needed?', ans: null, ca: 0 },
      { quest: 'Food waste can go in any bin?', ans: null, ca: 0 },
      { quest: 'you can work if you have been drink?', ans: null, ca: 0 },
    ]
  },
  {
    title: 'Your Responsibility',
    slug: 'your-responsibility',
    questions:[
      { quest: 'If you see an accident happen you don’t need to inform your supervisor?', ans: null, ca: 1 },
      { quest: 'Is it you responsibility to ask if in doubt?', ans: null, ca: 1 },
      { quest: 'You can take shortcuts to do the job faster?', ans: null, ca: 0 },
      { quest: 'Do you need to inform your supervisor if you can’t make it to work?', ans: null, ca: 1 },
      { quest: 'Can you do a task that is unrelated to your position?', ans: null, ca: 0 },
    ]
  }
]
export default inductions;
