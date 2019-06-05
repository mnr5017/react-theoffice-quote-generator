import React, { Component } from 'react';

class Quotes extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
	  	randomIndex: ''
	  }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20)
      });
  }
  
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  
  render() {

    const possibleQuotes = [
      'I love inside jokes.  I\'d love to be a part of one someday.',
      'I feel like all my kids grew up and then they married each other. It\'s every parents dream.',
      'Is there something besides Mexican you prefer to be called? Something less offensive?', 
      'Life is short. Drive fast and leave a sexy corpse. That\'s one of my mottos.',
      'How to take off a womans bra: You just twist your hand until something breaks.',
      'Yeah.. Phyllis called me Michael. And I will always and forever be haunted by that fact.',
      'Ultimatums are key. Basically nobody does anything for me unless I threaten to kill myself.',
      'Identity theft is not a joke, Jim! Millions of families suffer every year.',
      'Oh, look! A Sbarro. My favorite New York pizza joint. And I\'m going to get me a New York slice!',
      'I am about to do something very bold in this job that I\'ve never done before...try.',
      'Michael always says \'KISS\': keep it simple, stupid. Great advice, hurts my feelings every time.',
      'Webster\'s Dictionary defines wedding as: The fusing of two metals with a hot torch.',
      'Nothing stresses me out. Except having to seek the approval of my inferiors.',
      'My parents used to scramble to find babysitters, so they could take my little brother to do stuff.',
      'Toby is in HR which technically means he works for corporate.  So he\'s not really a part of our family. Also he\'s divorced...so he\'s not really a part of his family.', 
      'If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.',
      'I don\'t come up with this stuff, I just forward it along. You wouldn\'t arrest the guy who was just passing drugs from one guy to another.',
      'I have got to make sure that YouTube comes down to tape this.',
      'I overslept. Damn rooster didn\'t crow.',
      'I hate so much about the things you choose to be.',
      'A real man swallows his vomit when a lady is present.',
      'Well, well, well...how the turn tables.',
      'I feel God in this Chili\'s tonight.',
      'You cheated on me? When I specifically asked you not to?!',
      'Mistletoe is not an excuse for sexual assualt'
    ];

    const quote = possibleQuotes[this.state.randomIndex];
    return (
      <div>
        <button class="generateButton" onClick={this.ask}>
          That's what he said
        </button><br />
        <p>
           {quote}
        </p>
        <h3>-Michael Scott</h3>
      </div>
    );
  }
};

export default Quotes