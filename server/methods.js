Meteor.startup(function (){
    process.env.MAIL_URL = 'smtp://postmaster@sandboxe5181761ecf44417a8b5caa6f0846285.mailgun.org:test135@smtp.mailgun.org:587'
});

Meteor.methods({
  sendRsvp: function (names, attending, message) {
    check([names, attending, message], [String]);

    text = names + " rsvp: " + attending + "\n" + message;
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: "sjohnson540@gmail.com",
      from: "rsvp@allisonandsamforever.com",
      subject: "RSVP",
      text: text
    });
  }
});
