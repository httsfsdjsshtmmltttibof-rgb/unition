"use strict";
// Authoritative UNATION English School Placement Test Question Bank
// Stored and scored server-side only. Never exposed in public client bundles.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_DURATION_SECONDS = exports.TOTAL_QUESTIONS = exports.QUESTIONS = exports.READING_PASSAGE_TIGERS = exports.READING_PASSAGE_BURNING_SUN = exports.READING_PASSAGE_GOLD = void 0;
exports.calculateLevel = calculateLevel;
exports.getClientQuestions = getClientQuestions;
exports.READING_PASSAGE_GOLD = `Gold has exerted an irresistible hold on human imagination for millennia, yet its enduring allure owes less to its utility than to a peculiar alchemy of psychology and scarcity. Unlike iron or copper, which forged civilizations through practical application, gold's primary function has always been symbolic — a proxy for status, divinity, and, latterly, financial security. Its chemical inertness, the very property that renders it commercially marginal in industrial terms, is precisely what makes it so potent a store of value: it neither tarnishes nor corrodes, persisting unchanged across centuries while empires crumble around it.

Economists have long debated whether gold's monetary role is rational or merely vestigial. The gold standard, which anchored international finance until the twentieth century, was abandoned precisely because the metal's supply could not expand in tandem with economic growth — a rigidity that periodically induced deflationary spirals. Yet the abandonment of gold as a monetary anchor has hardly diminished its mystique. Central banks continue to hoard reserves, and in times of geopolitical turbulence, investors flock to it with almost superstitious alacrity. Critics deride this as a "barbarous relic," arguing that gold generates no income and its value is sustained by little more than collective faith. Defenders counter that this very faith — rooted in millennia of consistent human behavior — is itself a form of security no fiat currency can replicate.

What is most striking, perhaps, is how gold's extraction has shaped the modern world in ways seldom acknowledged. The Spanish conquest of the Americas was driven substantially by the pursuit of El Dorado; the subsequent influx of bullion triggered a price revolution that reshaped European economies. More recently, artisanal mining in developing nations has exposed troubling questions about labor practices and environmental degradation. Gold, it seems, is never merely gold: it is a mirror reflecting the values, ambitions, and moral compromises of the societies that prize it.`;
exports.READING_PASSAGE_BURNING_SUN = `The Burning Sun scandal, which erupted in 2019, remains one of the most disturbing episodes in contemporary South Korean public life — not merely for the crimes committed within the club's walls, but for what the subsequent investigation revealed about the collusion between wealth, celebrity, and institutional failure. What began as allegations of drug trafficking and sexual assault metastasized into a sprawling inquiry implicating K-pop idols, police officials, and business figures, exposing a nexus of corruption that many had suspected but few could prove.

At its core, the case raised uncomfortable questions about the mechanics of impunity. The club functioned, according to testimony, as a space where powerful men could operate with a sense of inviolability, shielded by connections that rendered accountability theoretical rather than real. The complicity of police — several officers were found to have tipped off the club about impending inspections — suggested that the rot extended far beyond individual misconduct into systemic dysfunction. The scandal thus became a lightning rod for public fury not simply because of the lurid details, but because it crystallized a broader perception that justice in South Korea was contingent on one's social standing.

The fallout was considerable: convictions followed, careers were destroyed, and the case catalyzed legislative reform. Yet critics argue that the episode's deeper significance lies in what it revealed about the silence of bystanders — the patrons who witnessed wrongdoing and said nothing, the media outlets that initially hesitated, the industry that protected its own. The Burning Sun affair, in this reading, is less a story about a nightclub than a cautionary tale about the fragility of accountability when profit and prestige align against it.`;
exports.READING_PASSAGE_TIGERS = `Few creatures occupy as contradictory a place in human culture as the tiger. Revered as a symbol of majesty and ferocity across Asia — from the royal Bengal to the Siberian taiga — the tiger has simultaneously been hunted, poached, and displaced to the brink of extinction. This paradox, whereby admiration and destruction proceed hand in hand, is central to understanding the animal's precarious fate.

The tiger's cultural stature is genuinely extraordinary. In Chinese cosmology, it embodies yang energy and warding power; in Korean folklore, it is both trickster and protector; in Indian tradition, it is the mount of deities and the emblem of sovereign might. Yet the very attributes that inspire reverence — its pelt, its bones, its perceived medicinal properties — have driven a lucrative illicit trade that conservationists have struggled to suppress. Demand for tiger parts in traditional medicine persists despite the absence of scientific evidence for their efficacy, sustained by belief and the prestige attached to rarity.

Conservation efforts have yielded mixed results. Habitat fragmentation, prey depletion, and human wildlife conflict remain formidable obstacles, and the tiger's vast territorial requirements render it especially vulnerable to development. Some populations, notably in India and Nepal, have rebounded through concerted protection, but the species' overall trajectory remains fragile. The tiger, in essence, tests whether humanity can reconcile its symbolic devotion with the mundane, unglamorous work of preservation — a question whose answer will determine whether the animal survives as more than a cultural memory.`;
exports.QUESTIONS = [
    // PART A (Questions 1-50, 3 options each)
    { id: 1, section: 'A', question_text: '_ name is Robert.', option_a: 'Me', option_b: 'I', option_c: 'My', correct_answer: 'c' },
    { id: 2, section: 'A', question_text: 'They _ from Spain.', option_a: 'is', option_b: 'are', option_c: 'do', correct_answer: 'b' },
    { id: 3, section: 'A', question_text: '_ are you from?', option_a: 'What', option_b: 'Who', option_c: 'Where', correct_answer: 'c' },
    { id: 4, section: 'A', question_text: "What do you do? I'm _ student.", option_a: 'the', option_b: 'a', option_c: 'an', correct_answer: 'b' },
    { id: 5, section: 'A', question_text: "Peter _ at seven o'clock.", option_a: 'goes up', option_b: 'gets', option_c: 'gets up', correct_answer: 'c' },
    { id: 6, section: 'A', question_text: '_ you like this DVD?', option_a: 'Are', option_b: 'Have', option_c: 'Do', correct_answer: 'c' },
    { id: 7, section: 'A', question_text: 'We _ live in a flat.', option_a: "don't", option_b: "hasn't", option_c: "doesn't", correct_answer: 'a' },
    { id: 8, section: 'A', question_text: 'Wednesday, Thursday, Friday, _', option_a: 'Saturday', option_b: 'Tuesday', option_c: 'Monday', correct_answer: 'a' },
    { id: 9, section: 'A', question_text: '_ he play tennis very often?', option_a: 'Where', option_b: 'Does', option_c: 'Do', correct_answer: 'b' },
    { id: 10, section: 'A', question_text: 'Have you _ a car?', option_a: 'any', option_b: 'have', option_c: 'got', correct_answer: 'c' },
    { id: 11, section: 'A', question_text: "We don't have _ butter.", option_a: 'a', option_b: 'any', option_c: 'got', correct_answer: 'b' },
    { id: 12, section: 'A', question_text: '___ some money here.', option_a: "There're", option_b: 'There', option_c: "There's", correct_answer: 'c' },
    { id: 13, section: 'A', question_text: 'We_____ got a garage.', option_a: "haven't", option_b: "hasn't", option_c: "don't", correct_answer: 'a' },
    { id: 14, section: 'A', question_text: 'Those shoes are very__ .', option_a: 'expensive', option_b: 'a lot', option_c: 'cost', correct_answer: 'a' },
    { id: 15, section: 'A', question_text: 'Have you got a pen? Yes, I _ .', option_a: 'am', option_b: 'have', option_c: 'got', correct_answer: 'b' },
    { id: 16, section: 'A', question_text: 'It is a busy, _ city.', option_a: 'traffic', option_b: 'quite', option_c: 'noisy', correct_answer: 'c' },
    { id: 17, section: 'A', question_text: 'They _ at home yesterday.', option_a: 'was', option_b: 'are', option_c: 'were', correct_answer: 'c' },
    { id: 18, section: 'A', question_text: 'I _ there for a long time.', option_a: 'lived', option_b: 'living', option_c: 'live', correct_answer: 'a' },
    { id: 19, section: 'A', question_text: "He didn't _ glasses.", option_a: 'put', option_b: 'wear', option_c: 'take', correct_answer: 'b' },
    { id: 20, section: 'A', question_text: 'The restaurant was _ busy.', option_a: 'very', option_b: 'a lot', option_c: 'many', correct_answer: 'a' },
    { id: 21, section: 'A', question_text: 'Do you like the red _ ?', option_a: 'it', option_b: 'that', option_c: 'one', correct_answer: 'c' },
    { id: 22, section: 'A', question_text: 'He _ to Brazil on business.', option_a: 'go', option_b: 'goed', option_c: 'went', correct_answer: 'c' },
    { id: 23, section: 'A', question_text: 'Yesterday was the _ of April.', option_a: 'third', option_b: 'three', option_c: 'day three', correct_answer: 'a' },
    { id: 24, section: 'A', question_text: "She's got _ hair.", option_a: 'darkness, long', option_b: 'longly and dark', option_c: 'dark, long', correct_answer: 'c' },
    { id: 25, section: 'A', question_text: 'I _ play football at the weekend.', option_a: 'usually', option_b: 'use', option_c: 'usual', correct_answer: 'a' },
    { id: 26, section: 'A', question_text: 'I _ in an armchair at the moment.', option_a: 'sitting', option_b: '‘m sitting', option_c: 'sit', correct_answer: 'b' },
    { id: 27, section: 'A', question_text: 'My brother is older _ me.', option_a: 'then', option_b: 'that', option_c: 'than', correct_answer: 'c' },
    { id: 28, section: 'A', question_text: 'Their car is _ biggest on the road.', option_a: 'than', option_b: 'this', option_c: 'the', correct_answer: 'c' },
    { id: 29, section: 'A', question_text: "It's the _ interesting of his films.", option_a: 'more', option_b: 'much', option_c: 'most', correct_answer: 'c' },
    { id: 30, section: 'A', question_text: "The phone's ringing: _ answer it.", option_a: 'I’ll', option_b: 'I', option_c: 'will', correct_answer: 'a' },
    { id: 31, section: 'A', question_text: 'Do you _ classical or rock music?', option_a: 'rather', option_b: 'prefer', option_c: 'more', correct_answer: 'b' },
    { id: 32, section: 'A', question_text: 'He has _ breakfast.', option_a: 'ate', option_b: 'eaten', option_c: 'eat', correct_answer: 'b' },
    { id: 33, section: 'A', question_text: 'The _ have seen it before.', option_a: 'childs', option_b: 'child', option_c: 'children', correct_answer: 'c' },
    { id: 34, section: 'A', question_text: "I've never met an actor _ .", option_a: 'before', option_b: 'already', option_c: 'after', correct_answer: 'a' },
    { id: 35, section: 'A', question_text: '_ is very good exercise.', option_a: 'Swim', option_b: 'To swim', option_c: 'Swimming', correct_answer: 'c' },
    { id: 36, section: 'A', question_text: 'Have you _ been on a winter sports holiday?', option_a: 'always', option_b: 'ever', option_c: 'soon', correct_answer: 'b' },
    { id: 37, section: 'A', question_text: "I can't _ another language.", option_a: 'speaking', option_b: 'speak', option_c: 'to speak', correct_answer: 'b' },
    { id: 38, section: 'A', question_text: 'They _ pay for the tickets.', option_a: 'haven’t to', option_b: 'don’t have', option_c: 'don’t have to', correct_answer: 'c' },
    { id: 39, section: 'A', question_text: '_ old is their car?', option_a: 'What', option_b: 'When', option_c: 'How', correct_answer: 'c' },
    { id: 40, section: 'A', question_text: 'Are you _ for one or two weeks?', option_a: 'staying', option_b: 'stayed', option_c: 'stay', correct_answer: 'a' },
    { id: 41, section: 'A', question_text: 'Stephen _ to visit his parents.', option_a: 'will', option_b: 'going', option_c: 'is going', correct_answer: 'c' },
    { id: 42, section: 'A', question_text: "I don't _ getting up early.", option_a: 'not like', option_b: 'want', option_c: 'enjoy', correct_answer: 'c' },
    { id: 43, section: 'A', question_text: 'We _ like to see the mountains.', option_a: 'would', option_b: 'will', option_c: 'are', correct_answer: 'a' },
    { id: 44, section: 'A', question_text: 'They _ ever check their emails.', option_a: 'hard', option_b: 'harder', option_c: 'hardly', correct_answer: 'c' },
    { id: 45, section: 'A', question_text: "They won't come, _ they?", option_a: 'won’t', option_b: 'come', option_c: 'will', correct_answer: 'c' },
    { id: 46, section: 'A', question_text: 'He _ know how to spell it.', option_a: 'doesn’t', option_b: 'hasn’t', option_c: 'don’t', correct_answer: 'a' },
    { id: 47, section: 'A', question_text: 'Carla _ to the radio all morning.', option_a: 'listening', option_b: 'heard', option_c: 'listened', correct_answer: 'c' },
    { id: 48, section: 'A', question_text: 'They _ come to the cinema with us.', option_a: 'doesn’t', option_b: 'not', option_c: 'didn’t', correct_answer: 'c' },
    { id: 49, section: 'A', question_text: 'I like this song. _ do I.', option_a: 'Either', option_b: 'So', option_c: 'Neither', correct_answer: 'b' },
    { id: 50, section: 'A', question_text: "We _ them at eight o'clock.", option_a: 'meet', option_b: '‘re meet', option_c: '‘re meeting', correct_answer: 'c' },
    // PART B (Questions 51-100, 4 options each)
    { id: 51, section: 'B', question_text: 'They are going _ in America next month.', option_a: 'to be', option_b: 'will be', option_c: 'be', option_d: 'being', correct_answer: 'a' },
    { id: 52, section: 'B', question_text: 'This is the cinema _ we saw the film.', option_a: 'when', option_b: 'which', option_c: 'that', option_d: 'where', correct_answer: 'd' },
    { id: 53, section: 'B', question_text: 'Have you ever _ in a jazz band?', option_a: 'seen', option_b: 'played', option_c: 'listened', option_d: 'wanted', correct_answer: 'b' },
    { id: 54, section: 'B', question_text: "I'm _ when I'm with you.", option_a: 'happiers', option_b: 'happier than', option_c: 'happier', option_d: 'the happy', correct_answer: 'c' },
    { id: 55, section: 'B', question_text: 'This is _ than I thought.', option_a: 'bad', option_b: 'badder', option_c: 'worse', option_d: 'worst', correct_answer: 'c' },
    { id: 56, section: 'B', question_text: 'Can you tell me the way _ ?', option_a: 'to the bank', option_b: 'is the bank', option_c: 'where is bank', option_d: 'of the bank', correct_answer: 'a' },
    { id: 57, section: 'B', question_text: 'Do you know what _ ?', option_a: 'time is it', option_b: 'time is', option_c: 'time is now', option_d: 'time it is', correct_answer: 'd' },
    { id: 58, section: 'B', question_text: 'Were you _ to open the door?', option_a: 'could', option_b: 'can', option_c: 'able', option_d: 'possible', correct_answer: 'c' },
    { id: 59, section: 'B', question_text: 'Everybody _ wear a seat belt in the car.', option_a: 'must', option_b: 'mustn’t', option_c: 'don’t have to', option_d: 'doesn’t have to', correct_answer: 'a' },
    { id: 60, section: 'B', question_text: 'Tom has lived in this town _ three years.', option_a: 'since', option_b: 'from', option_c: 'after', option_d: 'for', correct_answer: 'd' },
    { id: 61, section: 'B', question_text: 'We _ work in that factory.', option_a: 'use to', option_b: 'was', option_c: 'used to', option_d: 'then', correct_answer: 'c' },
    { id: 62, section: 'B', question_text: 'I think it _ be sunny tomorrow.', option_a: 'will probably', option_b: 'probably', option_c: 'can', option_d: 'will to', correct_answer: 'a' },
    { id: 63, section: 'B', question_text: 'He _ like his brother.', option_a: 'look', option_b: 'isn’t', option_c: 'isn’t look', option_d: 'can look', correct_answer: 'b' },
    { id: 64, section: 'B', question_text: '_ does your boyfriend look like?', option_a: 'How', option_b: 'What', option_c: 'Why', option_d: 'Which', correct_answer: 'b' },
    { id: 65, section: 'B', question_text: "I've got _ many problems.", option_a: 'too', option_b: 'a', option_c: 'enough', option_d: 'really', correct_answer: 'a' },
    { id: 66, section: 'B', question_text: 'If we get up in time, _ catch the train.', option_a: 'we catch', option_b: 'we caught', option_c: 'we had caught', option_d: 'we’ll catch', correct_answer: 'd' },
    { id: 67, section: 'B', question_text: 'They _ to go to France for a year.', option_a: 'decide', option_b: 'deciding', option_c: 'decided', option_d: 'to decide', correct_answer: 'c' },
    { id: 68, section: 'B', question_text: "I'm working _ to pass my exam.", option_a: 'hardly', option_b: 'much', option_c: 'hard', option_d: 'good', correct_answer: 'c' },
    { id: 69, section: 'B', question_text: "I'm writing _ ask you to explain.", option_a: 'for', option_b: 'in order to', option_c: 'because', option_d: 'because of', correct_answer: 'b' },
    { id: 70, section: 'B', question_text: 'He said that most problems _ by teenagers.', option_a: 'cause', option_b: 'caused', option_c: 'were caused', option_d: 'were causing', correct_answer: 'c' },
    { id: 71, section: 'B', question_text: 'What _ to do at the weekend?', option_a: 'have you like', option_b: 'are you liking', option_c: 'do you like', option_d: 'is you like', correct_answer: 'c' },
    { id: 72, section: 'B', question_text: 'Football _ in most countries.', option_a: 'plays', option_b: 'players', option_c: 'is played', option_d: 'is playing', correct_answer: 'c' },
    { id: 73, section: 'B', question_text: 'Who was _ the door?', option_a: 'at', option_b: 'on', option_c: 'in', option_d: 'of', correct_answer: 'a' },
    { id: 74, section: 'B', question_text: 'We _ lunch when you telephoned.', option_a: 'was having', option_b: 'had', option_c: 'were having', option_d: 'are having', correct_answer: 'c' },
    { id: 75, section: 'B', question_text: 'Your work is _ better.', option_a: 'being', option_b: 'doing', option_c: 'getting', option_d: 'falling', correct_answer: 'c' },
    { id: 76, section: 'B', question_text: 'She could play the piano _ she could walk.', option_a: 'during', option_b: 'while', option_c: 'as well', option_d: 'before', correct_answer: 'd' },
    { id: 77, section: 'B', question_text: 'The train was cancelled, so we _ .', option_a: 'couldn’t go', option_b: 'wasn’t go', option_c: 'didn’t went', option_d: 'mustn’t go', correct_answer: 'a' },
    { id: 78, section: 'B', question_text: 'The problem was _ solved.', option_a: 'easy', option_b: 'easy to', option_c: 'an easy', option_d: 'easily', correct_answer: 'd' },
    { id: 79, section: 'B', question_text: 'It was a difficult journey, but I _ get home.', option_a: 'could', option_b: 'managed to', option_c: 'at last', option_d: 'was', correct_answer: 'b' },
    { id: 80, section: 'B', question_text: 'We had not _ heard the news.', option_a: 'already', option_b: 'always', option_c: 'yet', option_d: 'today', correct_answer: 'c' },
    { id: 81, section: 'B', question_text: 'We arrived at the station, but the bus _ earlier.', option_a: 'has left', option_b: 'had leave', option_c: 'has leave', option_d: 'had left', correct_answer: 'd' },
    { id: 82, section: 'B', question_text: 'We can _ walk or go by car.', option_a: 'both', option_b: 'rather', option_c: 'either', option_d: 'neither', correct_answer: 'c' },
    { id: 83, section: 'B', question_text: "If I _ enough money, I'd buy a new car.", option_a: 'had', option_b: 'would', option_c: 'did', option_d: 'shall', correct_answer: 'a' },
    { id: 84, section: 'B', question_text: 'It _ correctly.', option_a: 'hasn’t done', option_b: 'hasn’t been done', option_c: 'hasn’t been do', option_d: 'not been done', correct_answer: 'b' },
    { id: 85, section: 'B', question_text: 'The accident wouldn’t have happened, if you had been more _ .', option_a: 'careful', option_b: 'carefully', option_c: 'careless', option_d: 'caring', correct_answer: 'a' },
    { id: 86, section: 'B', question_text: 'It _ be possible some time in the future.', option_a: 'can', option_b: 'hope', option_c: 'may', option_d: 'is', correct_answer: 'c' },
    { id: 87, section: 'B', question_text: 'Schools then _ having more children in the class.', option_a: 'was used to', option_b: 'were used to', option_c: 'was use to', option_d: 'were use to', correct_answer: 'b' },
    { id: 88, section: 'B', question_text: 'We _ to goto work at six in the morning.', option_a: 'must', option_b: 'would', option_c: 'had', option_d: 'did', correct_answer: 'c' },
    { id: 89, section: 'B', question_text: 'They _ an old photograph of the place.', option_a: 'came up', option_b: 'came across', option_c: 'came into', option_d: 'came after', correct_answer: 'b' },
    { id: 90, section: 'B', question_text: 'I _ I had been able to meet her.', option_a: 'hope', option_b: 'want', option_c: 'think', option_d: 'wish', correct_answer: 'd' },
    { id: 91, section: 'B', question_text: 'We’ll have taken our exams _ this time next month.', option_a: 'by', option_b: 'on', option_c: 'during', option_d: 'for', correct_answer: 'a' },
    { id: 92, section: 'B', question_text: 'I will do badly in my work, _ try harder.', option_a: 'if I’m not', option_b: 'if I wasn’t', option_c: 'if I haven’t', option_d: 'if I don’t', correct_answer: 'd' },
    { id: 93, section: 'B', question_text: 'I _ wasted my time when I was at university.', option_a: 'regret', option_b: 'shouldn’t', option_c: 'ought not to', option_d: 'shouldn’t have', correct_answer: 'd' },
    { id: 94, section: 'B', question_text: 'This is going to be my chance to _ any difficulties.', option_a: 'repair', option_b: 'sort out', option_c: 'solve', option_d: 'improve', correct_answer: 'b' },
    { id: 95, section: 'B', question_text: 'It was difficult at first, but I soon got _ it.', option_a: 'got used to', option_b: 'get used to', option_c: 'changed to', option_d: 'used to', correct_answer: 'a' },
    { id: 96, section: 'B', question_text: 'How did you manage to cook _ a good meal?', option_a: 'so', option_b: 'that', option_c: 'absolutely', option_d: 'such', correct_answer: 'd' },
    { id: 97, section: 'B', question_text: 'The solution had been found, _ we hadn’t realized it.', option_a: 'however', option_b: 'therefore', option_c: 'although', option_d: 'even', correct_answer: 'c' },
    { id: 98, section: 'B', question_text: 'She _ I had been doing for all that time.', option_a: 'asked to me', option_b: 'asked for me', option_c: 'asked with me', option_d: 'asked me', correct_answer: 'd' },
    { id: 99, section: 'B', question_text: 'They _ heard us coming, we were making a lot of noise.', option_a: 'must have', option_b: 'must', option_c: 'might', option_d: 'could', correct_answer: 'a' },
    { id: 100, section: 'B', question_text: 'He _ to help me with the decorating.', option_a: 'suggested', option_b: 'offered', option_c: 'invited', option_d: 'told', correct_answer: 'b' },
    // READING SECTION (Questions 101-120)
    // Text 1: Gold — The Eternal Obsession (101-106)
    {
        id: 101,
        section: 'reading',
        reading_passage_title: 'Text 1: Gold — The Eternal Obsession',
        reading_passage: exports.READING_PASSAGE_GOLD,
        question_text: "According to the first paragraph, what primarily accounts for gold's enduring appeal?",
        option_a: 'Its superior industrial utility',
        option_b: 'A combination of psychological factors and rarity',
        option_c: 'Its ability to forge civilizations',
        option_d: 'Its chemical reactivity',
        correct_answer: 'b'
    },
    {
        id: 102,
        section: 'reading',
        reading_passage_title: 'Text 1: Gold — The Eternal Obsession',
        reading_passage: exports.READING_PASSAGE_GOLD,
        question_text: "The writer suggests that gold's chemical inertness is:",
        option_a: 'An obstacle to its commercial value',
        option_b: 'Paradoxically central to its role as a store of value',
        option_c: 'The reason it corrodes over time',
        option_d: 'Irrelevant to its symbolic status',
        correct_answer: 'b'
    },
    {
        id: 103,
        section: 'reading',
        reading_passage_title: 'Text 1: Gold — The Eternal Obsession',
        reading_passage: exports.READING_PASSAGE_GOLD,
        question_text: 'Why was the gold standard abandoned, according to the text?',
        option_a: 'Gold supplies could not expand in line with economic growth',
        option_b: 'Central banks refused to hold reserves',
        option_c: 'Investors lost faith in the metal',
        option_d: 'It generated no income for governments',
        correct_answer: 'a'
    },
    {
        id: 104,
        section: 'reading',
        reading_passage_title: 'Text 1: Gold — The Eternal Obsession',
        reading_passage: exports.READING_PASSAGE_GOLD,
        question_text: 'The phrase "barbarous relic" is used in the text to reflect:',
        option_a: "The view of gold's defenders",
        option_b: 'The perspective of central banks',
        option_c: 'A criticism that gold is sustained by mere collective faith',
        option_d: 'An argument for returning to the gold standard',
        correct_answer: 'c'
    },
    {
        id: 105,
        section: 'reading',
        reading_passage_title: 'Text 1: Gold — The Eternal Obsession',
        reading_passage: exports.READING_PASSAGE_GOLD,
        question_text: 'Which of the following is NOT mentioned as an effect of gold extraction?',
        option_a: 'The Spanish pursuit of El Dorado',
        option_b: 'A price revolution in Europe',
        option_c: 'Concerns about labor practices',
        option_d: 'The collapse of the Roman Empire',
        correct_answer: 'd'
    },
    {
        id: 106,
        section: 'reading',
        reading_passage_title: 'Text 1: Gold — The Eternal Obsession',
        reading_passage: exports.READING_PASSAGE_GOLD,
        question_text: 'The final sentence ("Gold... is never merely gold") implies that:',
        option_a: 'Gold has no symbolic meaning',
        option_b: 'Gold reflects the values and compromises of the societies that prize it',
        option_c: "Gold's value is purely economic",
        option_d: 'Gold should be banned from mining',
        correct_answer: 'b'
    },
    // Text 2: The Burning Sun Night Club — A Scandal of Power and Silence (107-112)
    {
        id: 107,
        section: 'reading',
        reading_passage_title: 'Text 2: The Burning Sun Night Club — A Scandal of Power and Silence',
        reading_passage: exports.READING_PASSAGE_BURNING_SUN,
        question_text: 'The scandal is described as significant not only for the crimes but for revealing:',
        option_a: 'The inefficiency of the police',
        option_b: 'Collusion between wealth, celebrity, and institutions',
        option_c: 'The popularity of nightclubs',
        option_d: 'The decline of K-pop',
        correct_answer: 'b'
    },
    {
        id: 108,
        section: 'reading',
        reading_passage_title: 'Text 2: The Burning Sun Night Club — A Scandal of Power and Silence',
        reading_passage: exports.READING_PASSAGE_BURNING_SUN,
        question_text: 'The word "metastasized" (paragraph 1) is used to convey:',
        option_a: 'A rapid and sprawling expansion of the inquiry',
        option_b: 'The medical nature of the allegations',
        option_c: 'A reduction in the scope of the investigation',
        option_d: 'The closure of the club',
        correct_answer: 'a'
    },
    {
        id: 109,
        section: 'reading',
        reading_passage_title: 'Text 2: The Burning Sun Night Club — A Scandal of Power and Silence',
        reading_passage: exports.READING_PASSAGE_BURNING_SUN,
        question_text: 'According to the text, the complicity of police suggested that:',
        option_a: 'Only individual officers were corrupt',
        option_b: 'The problem was systemic rather than isolated',
        option_c: 'The club was innocent of wrongdoing',
        option_d: 'Inspections were conducted fairly',
        correct_answer: 'b'
    },
    {
        id: 110,
        section: 'reading',
        reading_passage_title: 'Text 2: The Burning Sun Night Club — A Scandal of Power and Silence',
        reading_passage: exports.READING_PASSAGE_BURNING_SUN,
        question_text: 'Public fury was intensified because the case crystallized the perception that:',
        option_a: 'Nightclubs should be banned',
        option_b: 'Celebrities are above the law',
        option_c: 'Justice was contingent on social standing',
        option_d: 'Media coverage was excessive',
        correct_answer: 'c'
    },
    {
        id: 111,
        section: 'reading',
        reading_passage_title: 'Text 2: The Burning Sun Night Club — A Scandal of Power and Silence',
        reading_passage: exports.READING_PASSAGE_BURNING_SUN,
        question_text: 'The text suggests that the deeper significance of the affair lies in:',
        option_a: 'The number of convictions secured',
        option_b: 'The legislative reforms enacted',
        option_c: 'The silence of bystanders and enablers',
        option_d: 'The closure of the club',
        correct_answer: 'c'
    },
    {
        id: 112,
        section: 'reading',
        reading_passage_title: 'Text 2: The Burning Sun Night Club — A Scandal of Power and Silence',
        reading_passage: exports.READING_PASSAGE_BURNING_SUN,
        question_text: 'The final sentence describes the affair as a "cautionary tale" about:',
        option_a: 'The dangers of nightlife',
        option_b: 'The fragility of accountability when profit and prestige align',
        option_c: 'The power of the media',
        option_d: 'The importance of K-pop idols',
        correct_answer: 'b'
    },
    // Text 3: Tigers — The Paradox of Reverence and Ruin (113-120)
    {
        id: 113,
        section: 'reading',
        reading_passage_title: 'Text 3: Tigers — The Paradox of Reverence and Ruin',
        reading_passage: exports.READING_PASSAGE_TIGERS,
        question_text: 'The central paradox discussed in the first paragraph is that:',
        option_a: 'Tigers are both revered and destroyed by humans',
        option_b: 'Tigers are extinct in the wild',
        option_c: 'Tigers are more feared than admired',
        option_d: 'Tigers exist only in folklore',
        correct_answer: 'a'
    },
    {
        id: 114,
        section: 'reading',
        reading_passage_title: 'Text 3: Tigers — The Paradox of Reverence and Ruin',
        reading_passage: exports.READING_PASSAGE_TIGERS,
        question_text: 'In Chinese cosmology, the tiger is said to embody:',
        option_a: 'Yin energy',
        option_b: 'Yang energy and warding power',
        option_c: 'Trickster qualities',
        option_d: 'Sovereign might exclusively',
        correct_answer: 'b'
    },
    {
        id: 115,
        section: 'reading',
        reading_passage_title: 'Text 3: Tigers — The Paradox of Reverence and Ruin',
        reading_passage: exports.READING_PASSAGE_TIGERS,
        question_text: 'Demand for tiger parts persists despite:',
        option_a: 'Abundant scientific evidence of their efficacy',
        option_b: 'The absence of scientific evidence for their efficacy',
        option_c: 'Government subsidies',
        option_d: 'The extinction of the species',
        correct_answer: 'b'
    },
    {
        id: 116,
        section: 'reading',
        reading_passage_title: 'Text 3: Tigers — The Paradox of Reverence and Ruin',
        reading_passage: exports.READING_PASSAGE_TIGERS,
        question_text: 'Which factor is NOT mentioned as an obstacle to conservation?',
        option_a: 'Habitat fragmentation',
        option_b: 'Prey depletion',
        option_c: 'Human-wildlife conflict',
        option_d: 'Climate change',
        correct_answer: 'd'
    },
    {
        id: 117,
        section: 'reading',
        reading_passage_title: 'Text 3: Tigers — The Paradox of Reverence and Ruin',
        reading_passage: exports.READING_PASSAGE_TIGERS,
        question_text: 'The tiger\'s "vast territorial requirements" make it especially vulnerable to:',
        option_a: 'Poaching',
        option_b: 'Development',
        option_c: 'Medicinal demand',
        option_d: 'Folklore',
        correct_answer: 'b'
    },
    {
        id: 118,
        section: 'reading',
        reading_passage_title: 'Text 3: Tigers — The Paradox of Reverence and Ruin',
        reading_passage: exports.READING_PASSAGE_TIGERS,
        question_text: 'Some populations have rebounded notably in:',
        option_a: 'China and Korea',
        option_b: 'India and Nepal',
        option_c: 'Siberia and Bengal',
        option_d: 'Europe and America',
        correct_answer: 'b'
    },
    {
        id: 119,
        section: 'reading',
        reading_passage_title: 'Text 3: Tigers — The Paradox of Reverence and Ruin',
        reading_passage: exports.READING_PASSAGE_TIGERS,
        question_text: 'The phrase "more than a cultural memory" (final paragraph) implies that:',
        option_a: 'The tiger is already only a memory',
        option_b: "The species' survival as a living animal is at stake",
        option_c: 'Culture is more important than conservation',
        option_d: 'Tigers exist only in memory',
        correct_answer: 'b'
    },
    {
        id: 120,
        section: 'reading',
        reading_passage_title: 'Text 3: Tigers — The Paradox of Reverence and Ruin',
        reading_passage: exports.READING_PASSAGE_TIGERS,
        question_text: 'The overall tone of Text 3 can best be described as:',
        option_a: 'Light-hearted and humorous',
        option_b: 'Reflective and cautionary',
        option_c: 'Indifferent and detached',
        option_d: 'Triumphant and celebratory',
        correct_answer: 'b'
    }
];
exports.TOTAL_QUESTIONS = 120;
exports.TEST_DURATION_SECONDS = 3600; // 60 minutes = 3600 seconds
/**
 * Determine the student's level using the exact score boundaries:
 * 0–20: Beginner
 * 21–35: Elementary
 * 36–60: Pre-intermediate
 * 61–85: Intermediate
 * 86–100: Upper Intermediate
 * 101–120: Advanced
 */
function calculateLevel(score) {
    if (score <= 20)
        return 'Beginner';
    if (score <= 35)
        return 'Elementary';
    if (score <= 60)
        return 'Pre-intermediate';
    if (score <= 85)
        return 'Intermediate';
    if (score <= 100)
        return 'Upper Intermediate';
    return 'Advanced';
}
/**
 * Sanitizes questions for client delivery (strips correct_answer field)
 */
function getClientQuestions() {
    return exports.QUESTIONS.map(({ correct_answer, ...publicFields }) => {
        void correct_answer;
        return publicFields;
    });
}
