/**
 * Template for job application
 * @param name {string} - Your name
 * @param pos {string} - Your position
 * @param coy {string} - Your organization
 * @param rName {string} - Recipient's name
 * @param rPos {string} - Recipient's position
 * @param rCoy {string} - Recipient's organization
 * @returns {string}
 */
const apply = (name, pos, coy, rName, rPos, rCoy) => {
    return `
I had a quick look at your profile earlier and noticed that you’re a highly experienced ${rPos} with ${rCoy}, a company I would love to work for. Hence, I would like to introduce myself and learn more about you and the work you do over at ${rCoy}.

I am ${name}, a ${pos} at ${coy}, actively sourcing for Summer 2021 internships. In particular, I am highly keen on an internship with the Software Engineering Division.

These are my top traits that I believe would allow me to contribute significantly.

☑ I thrive in positions of leadership and responsibility.
☑ I am never satisfied with the knowledge I have.
☑ I am a highly independent and proactive engineer, obsessed with giving users the best possible experience.

Thank you for reading my message, and I look forward to speaking with you soon, to discuss how my skills and experience can benefit the engineering team.
    `.trim();
}

/**
 * Template for checking back in
 * @param name {string} - Your name
 * @param pos {string} - Your position
 * @param coy {string} - Your organization
 * @param rName {string} - Recipient's name
 * @param rPos {string} - Recipient's position
 * @param rCoy {string} - Recipient's organization
 * @returns {string}
 */
const checkIn = (name, pos, coy, rName, rPos, rCoy) => {
    return `
Hello ${rName}

I just wanted to check back in with you regarding the status of my SWE internship application.
 
It is absolutely okay if you've been busy and cannot get back to me at the moment. Let me know when is a good time for us to chat and I shall follow up with you then. Thank you.
`.trim();
}

/**
 * Template for LinkedIn invitation / connection request
 * @param name {string} - Your name
 * @param pos {string} - Your position
 * @param coy {string} - Your organization
 * @param rName {string} - Recipient's name
 * @param rPos {string} - Recipient's position
 * @param rCoy {string} - Recipient's organization
 * @returns {string}
 */
const invite = (name, pos, coy, rName, rPos, rCoy) => {
    return `
Hello ${rName}

I’m ${name}, a ${pos} at ${coy}. I would like to connect with you, to learn more about you and the work you do, and find out how I can add value to both you and ${rCoy}.
`.trim();
}


export {apply, checkIn, invite};