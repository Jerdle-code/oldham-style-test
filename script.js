var names = ["Vigilant", "Solitary", "Idiosyncratic", "Adventurous", "Mercurial", "Dramatic", "Self-Confident", "Sensitive", "Devoted", "Conscientious", "Leisurely", "Aggressive", "Self-Sacrificing", "Serious"]
var max = [14, 14, 18, 16, 18, 16, 18, 14, 16, 16, 14, 16, 16, 14]
var qtext = `[
        {
            "question": "I tend to spend more time on my work than do some of my colleagues or coworkers, since I'm a perfectionist and like things to be done right.",
            "score": 10
        },
        {
            "question": "I am a very organized person. I like to follow a schedule and make lists of things I have to do. Sometimes I have more lists than I know what to do with!",
            "score": 10
        },
        {
            "question": "I've sometimes been called a workaholic. It's true that I work very hard even when I have enough money and the bills are all paid. I suppose if I wanted to I could knock off and relax, at least for a little while.",
            "score": 10
        },
        {
            "question": "I like my usual routines for doing things and I can be quite stubborn if people try to get me to change them.",
            "score": 10
        },
        {
            "question": "I hate routine and I'm not very good at obligations, so I put things off as long as I can or I just never get around to doing them.",
            "score": 11
        },
        {
            "question": "Whenever I succeed at something, I find that either I don't really enjoy it much or something goes wrong somewhere else in my life.",
            "score": 13
        },
        {
            "question": "I have a lot of abilities I can't seem to take advantage of. When I'm good at something, I can help other people with it, but I can't seem to put my ability to work for myself.",
            "score": 13
        },
        {
            "question": "I have a fairly good sense of myself. I know what kind of work I want to do, what kind of friends I like to be with, and overall what sorts of things are important to me.",
            "score": 5,
            "reverse": true
        },
        {
            "question": "I feel like I'm just an outer shell with nothing inside. I can feel pretty aimless.",
            "score": 5
        },
        {
            "question": "I like to daydream. I imagine myself rich or powerful or famous - maybe being applauded for winning the Nobel Prize, or idolized by crowds of fans for my talent or beauty.",
            "score": 7
        },
        {
            "question": "Even though I'm not sure I should be, I find myself fascinated by violence, weapons, and the martial arts. I like films and TV shows with a lot of action and violence in them.",
            "score": 12
        },
        {
            "question": "People say that I express myself in an odd way - that I say things that are too deep for them, or that I don't explain what I mean.",
            "score": 3
        },
        {
            "question": "I've been called arrogant, but so what!",
            "score": 7
        },
        {
            "question": "I like to be admired, and I have a habit of fishing for compliments when I'm being ignored.",
            "score": 7
        },
        {
            "question": "My appearance is very important to me. I spend a great deal of time making sure I look attractive.",
            "score": 6
        },
        {
            "question": "People sometimes think I'm eccentric because I dress my own way and because I seem a little spaced out to them. It's true that I live sort of in my own little world.",
            "score": 3
        },
        {
            "question": "Even though I think I understand people, they're always telling me I don't have a clue about how they feel.",
            "score": 7
        },
        {
            "question": "When it comes to standing in line or being seated in a crowded restaurant, I usually try to get to the front and get waited on right away - or at least I feel that's how I should be treated.",
            "score": 7
        },
        {
            "question": "I don't believe in feeling guilty about what I've done.",
            "score": 4
        },
        {
            "question": "I'm a cut above most people. The people I associate with and the organizations I belong to are all influential and important.",
            "score": 7
        },
        {
            "question": "Perhaps some people think I'm uptight or rigid, but I believe strongly that there's never an excuse for immoral or unethical behavior.",
            "score": 10
        },
        {
            "question": "I prefer to get other people's input or advice before making decisions, even everyday ones.",
            "score": 9
        },
        {
            "question": "I just can't seem to throw things out, even if they're useless or meaningless to me.",
            "score": 10
        },
        {
            "question": "Maybe I do exaggerate my own importance, but frankly I think I'm worth it.",
            "score": 7
        },
        {
            "question": "I judge myself much too harshly: I'm always blaming myself for everything that goes wrong or doesn't work out.",
            "score": 14
        },
        {
            "question": "I wouldn't call myself a light-hearted person. Things weigh more heavily on me than on most people and I tend to be pretty somber most of the time.",
            "score": 14
        },
        {
            "question": "Sometimes I think that Guilt is my middle name, since I'm always feeling guilty and remorseful or like I've done something wrong.",
            "score": 14
        },
        {
            "question": "I don't have much confidence in myself. Sometimes I feel I'm just worthless.",
            "score": 14
        },
        {
            "question": "Even though I don't hesitate to tell others about my problems, I'm very uncomfortable letting them help me with them.",
            "score": 13
        },
        {
            "question": "People may think I talk too much about my misfortunes, but they don't understand how bad things really are for me.",
            "score": 11
        },
        {
            "question": "I sometimes find myself laughing at other people's misfortunes, even though I'm not very proud of that reaction. Maybe it's just a way of saying there but for the grace of God go I.",
            "score": 12
        },
        {
            "question": "I find it hard being around people who are better off than I am, since I often feel jealous of their good fortune.",
            "score": 11
        },
        {
            "question": "I sometimes find it difficult to let go and have fun. When opportunities to enjoy myself come up, for some reason I have a hard time taking advantage of them.",
            "score": 13
        },
        {
            "question": "When it comes to relationships, sometimes I think I am my own worst enemy. I keep getting involved with people who end up treating me badly or disappointing me. I can't believe I'm so bad at sizing up others - I must be naive.",
            "score": 13
        },
        {
            "question": "I can be difficult to be with lots of times, and, when I think about it, my own expectations of others can be pretty unreasonable. But I still get upset when they get mad at me.",
            "score": 13
        },
        {
            "question": "When someone really cares about me or treats me with a lot of kindness or tenderness, I often feel uninterested. Somehow it just seems boring to me unless there's a real challenge in the relationship.",
            "score": 13
        },
        {
            "question": "I think sometimes I do too much for other people.",
            "score": 13
        },
        {
            "question": "I usually leave the big decisions to the important people in my life.",
            "score": 9
        },
        {
            "question": "I'm not what you would call a self-starter. I'm a much better follower than a leader, but I can be a very loyal team player.",
            "score": 9
        },
        {
            "question": "I like to express agreement with other people. When I disagree, I usually keep it to myself.",
            "score": 9
        },
        {
            "question": "I'll go out of my way to do things for other people - sometimes even unpleasant things - to get them to like me.",
            "score": 9
        },
        {
            "question": "I do much better when I'm in a relationship, because I feel pretty helpless when I'm on my own.",
            "score": 9
        },
        {
            "question": "When a relationship ends, I get kind of panicky and start searching right away for a new one.",
            "score": 9
        },
        {
            "question": "Probably I worry too much that I won't be able to take care of myself if I lose the important person in my life.",
            "score": 9
        },
        {
            "question": "Sometimes I worry so much that people will leave me that I get sort of frantic and call them up to get them to reassure me, which must get pretty annoying.",
            "score": 5
        },
        {
            "question": "I love being the center of attention - it's exhilarating. I'm much more comfortable in the middle of the action than at the sidelines.",
            "score": 6
        },
        {
            "question": "I like to flirt, and I like for people to think I'm sexually appealing.",
            "score": 6
        },
        {
            "question": "People describe me as very entertaining. I can tell about things that happen in a very enjoyable and colorful way, without having to get all the facts straight all the time.",
            "score": 6
        },
        {
            "question": "I'm rather suggestible. I have to watch out that I'm not too easily swayed by other people.",
            "score": 6
        },
        {
            "question": "All too often I assume there's more to a relationship than there really is. This causes me a lot of heartache.",
            "score": 6
        },
        {
            "question": "I typically get into very intense relationships, and I usually find my feelings about the person change from one extreme to another. Sometimes I almost worship, and other times I can't stand, the person I'm with.",
            "score": 5
        },
        {
            "question": "For me, envy is a fact of life. Either I'm envying somebody else, or someone else is probably envying me.",
            "score": 7
        },
        {
            "question": "I am not a very trusting person, even though I would like to be. I just can't help worrying that other people might take advantage of me unless I'm careful.",
            "score": 1,
            "double": true
        },
        {
            "question": "Sometimes I think that my friends or colleagues are not really as loyal as I would like them to be.",
            "score": 1
        },
        {
            "question": "I don't really have any close friends, except maybe some members of my immediate family.",
            "score": 2,
            "double": true
        },
        {
            "question": "I'm the jealous type. In my relationships I find myself worrying whether my partner is being faithful.",
            "score": 1
        },
        {
            "question": "I am a fairly private person and I generally keep things to myself, since you never know who will use personal information to their own advantage.",
            "score": 1,
            "double": true
        },
        {
            "question": "I tend to be a loner, which is fine with me. I don't really enjoy being around other people that much, even my family.",
            "score": 2
        },
        {
            "question": "When I have a choice, I prefer to do things by myself.",
            "score": 2
        },
        {
            "question": "I don't have a very strong drive to have sex with anyone.",
            "score": 2
        },
        {
            "question": "It's hard for me to be myself in intimate relationships. I'm afraid I'll seem ridiculous, so I hold back.",
            "score": 8
        },
        {
            "question": "I'm shy around new people.",
            "score": 8
        },
        {
            "question": "I often find social situations unbearable, even with people I know. I can't stand the feeling that the others are looking at me and sort of sizing me up, not always in a flattering way.",
            "score": 3
        },
        {
            "question": "I usually wait to get involved with people until I'm sure they like me.",
            "score": 8
        },
        {
            "question": "I feel more comfortable in work settings that do not involve a lot of people, because I can't help worrying that my coworkers will be critical of me.",
            "score": 8
        },
        {
            "question": "Socially I am a very confident person. I talk comfortably and am not awfully self-conscious or anxious that I'll say something stupid or appear uninformed.",
            "score": 8,
            "reverse": true
        },
        {
            "question": "People don't really appreciate or understand me.",
            "score": 11
        },
        {
            "question": "I can be rather critical of my boss or of other people in authority. Maybe I don't appreciate what it's like to be in their shoes, but it seems to me I sure could do a better job much of the time.",
            "score": 11
        },
        {
            "question": "When somebody asks me to do something I don't want to do, I can be a real pain  -  I'll sometimes argue or sulk or get very grouchy.",
            "score": 11
        },
        {
            "question": "If somebody nags me, I can get really stubborn and obnoxious, but later I might feel guilty and try to make up.",
            "score": 11
        },
        {
            "question": "I wish I weren't always so down on other people. No matter what they do, I seem to find something wrong with them.",
            "score": 14
        },
        {
            "question": "Some people say that I insist on doing too much myself, but I'd rather do the work myself than have someone else do it wrong or incompletely. And I'll risk being called bossy if that's what it takes to get people to do things in what I believe is the correct way.",
            "score": 10
        }, 
        {
            "question": "I think strict discipline is extremely important. Although I don't necessarily believe in physical punishment, I do believe in the principle behind the saying Spare the rod and spoil the child.",
            "score": 12
        }, 
        {
            "question": "My family members sometimes complain that I don't allow them enough independence or freedom. I guess I do run a pretty tight ship.",
            "score": 12
        }, 
        {
            "question": "People have told me that I put them down in front of others. They shouldn't be so thin-skinned  -  words aren't going to hurt anybody. And if they really think I'm being too critical, they should be able to stand up to me.",
            "score": 12
        }, 
        {
            "question": "I suppose I can be fairly intimidating. Some people have told me that they do what I want because they're afraid of me.",
            "score": 12
        }, 
        {
            "question": "I prefer to be in the dominant position in my relationships. As a result I can sometimes seem mean or cruel without realizing it.",
            "score": 12
        }, 
        {
            "question": "I believe there are situations in which you have to step on someone's toes to get where you're going.",
            "score": 7
        },
        {
            "question": "I find that certain people do little things to tease, annoy, or even insult me, just to get my goat.",
            "score": 1
        },
        {
            "question": "If somebody doesn't treat me right, I'll probably hold a grudge for a long time.",
            "score": 1
        },
        {
            "question": "I don't necessarily tell the truth.",
            "score": 4
        },
        {
            "question": "Occasionally I make up stories or distort the truth, just to see how other people will react. These are just jokes, though - no reason for anybody to get angry.",
            "score": 12
        },
        {
            "question": "People sometimes tell me I act like I have a chip on my shoulder. It's true that I'll fight or argue with anybody who gets on my bad side.",
            "score": 4
        },
        {
            "question": "I have a keen sense for when I'm being criticized, even when it's veiled, and I can tell you that I don't let anybody get away with it.",
            "score": 1
        },
        {
            "question": "I have a terrible temper, but there's nothing I can do about it.",
            "score": 5
        },
        {
            "question": "People sometimes tell me that they can't be sure when to take my feelings seriously.",
            "score": 6
        },
        {
            "question": "I express my feelings in a vivid and dramatic way.",
            "score": 6
        },
        {
            "question": "I go my own way emotionally. For example, something sad may strike me as funny and I'll laugh.",
            "score": 3
        },
        {
            "question": "I'm very reactive mood-wise. Little things can set me off. In a matter of a few hours I can experience a wide range of feelings, from happy to sad, annoyed, or anxious. But the bad moods never last long.",
            "score": 5
        },
        {
            "question": "I tend to brood and worry a lot.",
            "score": 14
        },        
        {
            "question": "I wish I didn't worry so much about what other people think of me in social situations.",
            "score": 8
        },
        {
            "question": "I hate trying new things or taking risks, because I'm afraid I'll make a fool of myself.",
            "score": 8
        },
        {
            "question": "There's not all that much that I really enjoy doing.",
            "score": 2
        },
        {
            "question": "You can call me poker-faced, since I'm generally very unemotional.",
            "score": 2
        },
        {
            "question": "I'm not the type to reveal any reaction when others criticize me or even compliment me.",
            "score": 2
        },
        {
            "question": "I guess I'm on a different wavelength from most other people. Sometimes I can feel strange things that are very real to me, even though I can't prove them, such as being outside of my own body or in the presence of a family member who has died.",
            "score": 3
        },    
        {
            "question": "I am fascinated by things like magic, ESP, and the supernatural. I have a sort of sixth sense and have sometimes had eerie experiences where I knew something was going to happen before it did.",
            "score": 3
        },
        {
            "question": "I tend to see the glass as half empty rather than half full.",
            "score": 14
        },
        {
            "question": "I do not spend money easily. Even though some people think I'm stingy, I believe that money belongs in the bank, in case something terrible happens.",
            "score": 10
        },
        {
            "question": "I like to act on impulse when the spirit moves me. For instance, I'll get drunk or stoned if I'm in the mood, I may indulge in food, maybe I'll drive too fast or enjoy a big shopping spree. Acting this way makes life a lot more interesting, although of course it backfires sometimes.",
            "score": 5
        },
        {
            "question": "I can be very dramatic when I'm upset. I have been known to threaten to harm myself, but I don't really mean it.",
            "score": 5
        },
        {
            "question": "I am intrigued by an underground kind of life where you can break the rules and get away with it.",
            "score": 4
        },
        {
            "question": "I just don't have the patience to stick with a job for long or worry about finances or paying my bills, so some people think I'm irresponsible.",
            "score": 4
        },
        {
            "question": "I'm not the kind of person who always takes the careful route. I may take risks - like driving over the speed limit or driving when I've had something to drink - but I know what I'm doing and I get where I'm going.",
            "score": 4
        },
        {
            "question": "I like to do things spontaneously, without planning ahead.",
            "score": 4
        },
        {
            "question": "When I was a kid I was something of a hell-raiser and was always getting into trouble. Some of these things applied to me: I skipped school; I ran away from home; I got into fights; I fooled around sexually; I told lies; I stole; I bullied people; I messed up people's property.",
            "score": 4
        },
        {
            "question": "When I'm under a lot of stress I can get unreasonably suspicious, or else I just tune everything out and pretend it isn't happening.",
            "score": 5
        }
    ]`
var text = [
    `<h2>Vigilant</h2>
    <h3>The Survivor</h3>
    
    <p>Nothing escapes the notice of the men and women who have Vigilant personality style. These individuals possess an
        exceptional awareness of their environment. Call them Survivors. Their sensory antennae, continuously scanning the
        people and situations around them, alert them immediately to what is awry, out of place, dissonant, or dangerous,
        especially in their dealings with other people. Vigilant types have a special kind of hearing. They are immediately
        aware of the mixed messages, the hidden motivations, the evasions, and the subtlest distortions of the truth that
        elude or delude less gifted observers. With such a focus, Vigilant individuals naturally assume the roles of social
        critic, watchdog, ombudsman, and crusader in their private or our public domain, ready to spring upon the
        improprieties—especially the abuses of power—that poison human affairs.</p>
    
    <h3>Traits</h3>
    
    <ol>
        <li>Autonomy. Vigilant-style individuals possess a resilient independence. They keep their own counsel, they require
            no outside reassurance or advice, they make decisions easily, and they can take care of themselves.
        <li>Caution. They are careful in their dealings with others, preferring to size up a person before entering into a
            relationship.
        <li>Perceptiveness. They are good listeners, with an ear for subtlety, tone, and multiple levels of communication.
        <li>Self-defense. Individuals with Vigilant style are feisty and do not hesitate to stand up for themselves,
            especially when they are under attack.
        <li>Alertness to criticism. They take criticism very seriously, without becoming intimidated.
        <li>Fidelity. They place a high premium on fidelity and loyalty. They work hard to earn it, and they never take it
            for granted.</li>
    </ol>`,
    `<h2>Solitary</h2>
    <h3>The Loner</h3>
    
    <p>Solitary men and women need no one but themselves. They are unmoved by the madding crowd, liberated from the drive to
        impress and to please. Solitary people are remarkably free of the emotions and involvements that distract so many
        others. What they may give up in terms of sentiment and intimacy, however, they may gain in clarity of vision. Left
        to their own devices, Solitary anthropologists, naturalists, mathematicians, physical scientists, filmmakers,
        writers, and poets can uncover and record the facts of our existence to which our passions so often blind us.</p>
    
    
    <h3>Traits</h3>
    
    <ol>
        <li>Solitude. Individuals with the Solitary personality style have small need of companionship and are most
            comfortable alone.</li>
        <li>Independence. They are self-contained and do not require interaction with others in order to enjoy their
            experiences or to get on in life.</li>
        <li>Sangfroid. Solitary men and women are even-tempered, calm, dispassionate, unsentimental, and unflappable.</li>
        <li>Stoicism. They display an apparent indifference to pain and pleasure.</li>
        <li>Sexual composure. They are not driven by sexual needs. They enjoy sex but will not suffer in its absence.</li>
        <li>Feet on the ground. They are unswayed by either praise or criticism and can confidently come to terms with their
            own behavior.</li>
    </ol>`,
    `<h2> Idiosyncratic </h2>
    <h3>The Different Drummer</h3>
    <p>Idiosyncratic men and women are not like anyone else. They are dreamers, seekers of the spirit, visionaries, mystics.
        They march to a distinctive beat, different from the conventional rhythms that most people follow. They are true
        originals and often they stand out, sometimes as eccentrics, sometimes as geniuses.</p>
    
    
    <h3>Traits</h3>
    <ol>
        <li>Inner life. Idiosyncratic individuals are tuned in to and sustained by their own feelings and belief systems,
            whether or not others accept or understand their particular worldview or approach to life.</li>
    
        <li>Own world. They are self-directed and independent, requiring few close relationships.</li>
    
        <li>Own thing. Oblivious to convention, Idiosyncratic individuals create interesting, unusual, often eccentric
            lifestyles.</li>
    
        <li>Expanded reality. Open to anything, they are interested in the occult, the extrasensory, and the supernatural.
        </li>
    
        <li>Metaphysics. They are drawn to abstract and speculative thinking.</li>
    
        <li>Outward view. Though they are inner-directed and follow their own hearts and minds, Idiosyncratic men and women
            are keen observers of others, particularly sensitive to how other people react to them.</li>
    </ol>`,
    `<h2>Adventurous</h2>
    <h3>The Challenger</h3>
    <p>Throw caution to the winds—here comes the Adventurer. Who but Adventurers would have taken those long leaps for
        mankind—crossed the oceans, broken the sound barrier, walked on the moon? The men and women with this personality
        style venture where most mortals fear to tread. They are not bound by the same terrors and worries that limit most
        of us. They live on the edge, challenging boundaries and restrictions, pitting themselves for better or for worse in
        a thrilling game against their own mortality. No risk, no reward, they say. Indeed, for people with the Adventurous
        personality style, the risk is the reward.</p>
    <h3>Traits</h3>
    <ol>
        <li>Nonconformity. Men and women who have the Adventurous personality style live by their own internal code of
            values. They are not strongly influenced by other people or by the norms of society.</li>
    
        <li>Challenge. To live is to dare. Adventurers love the thrill of risk and routinely engage in high-risk activities.
        </li>
    
        <li>Mutual independence. They do not worry too much about others, for they expect each human being to be responsible
            for him- or herself.</li>
    
        <li>Persuasiveness. They are silver-tongued, gifted in the gentle art of winning friends and influencing people.
        </li>
    
        <li>Wanderlust. They love to keep moving. They settle down only to have the urge to pick up and go, explore, move
            out, move on. They do not worry about finding work, and live well by their talents, skills, ingenuity, and wits.
        </li>
    
        <li>Wild oats. In their childhood and adolescence, people with the Adventurous personality style were usually
            high-spirited hell-raisers and mischief makers.</li>
    
        <li>True grit. They are courageous, physically bold, and tough. They will stand up to anyone who dares to take
            advantage of them.</li>
    
        <li>No regrets. Adventurers live in the present. They do not feel guilty about the past or anxious about the future.
            Life is meant to be experienced now.</li>
    </ol>`,
    `<h2>Mercurial</h2>
    <h3>Fire and Ice</h3>
    <p>Life is a roller coaster for those with the Mercurial personality style—and they'll insist that you come along for
        the ride. From the peaks to the valleys, intensity imbues their every breath. Mercurial women and men yearn for
        experience, and they jump into a new love or a new lifestyle with both feet, without even a glance backward. No
        other style, the Dramatic included, is so ardent in its desire to connect with life and with other people. And no
        other style is quite so capable of enduring the changes in emotional weather that such a fervidly lived life will
        bring.</p>
    <h3>Traits</h3>
    <ol>
        <li> Romantic attachment. Mercurial individuals must always be deeply involved in a romantic relationship with one
            person.
        </li>
        <li> Intensity. They experience a passionate, focused attachment in all their relationships. Nothing that goes on
            between them and other people is trivial, nothing taken lightly.
        </li>
        <li> Heart. They show what they feel. They are emotionally active and reactive. Mercurial types put their hearts
            into everything.
        </li>
        <li> Unconstraint. They are uninhibited, spontaneous, fun-loving, and undaunted by risk.
        </li>
        <li> Activity. Energy marks the Mercurial style. These individuals are lively, creative, busy, and engaging. They
            show initiative and can stir others to activity.
        </li>
        <li> Open mind. They are imaginative and curious, willing to experience and experiment with other cultures, roles,
            and value systems and to follow new paths.
        </li>
        <li> Alternate states. People with Mercurial style are skilled at distancing or distracting themselves from reality
            when it is painful or harsh.
        </li>
    </ol>`,
    `<h2>Dramatic</h2>
    <h3>The Life of the Party</h3>
    <p>Dramatic types are all heart. They have been granted the gift of feeling, with which they color the lives of everyone
        around them. When possessed of great talent, Dramatic men and women can transform human emotion into the highest art
        form. Even in their daily lives, their wit, their laughter, their sense of beauty, their flamboyance, and their
        sensuality can lift the spirits of a roomful of strangers. All the world's a stage for individuals with this very
        common personality style. Life is never dull or boring for them and certainly not for those who share it with them.
        Dramatic people fill their world with excitement; things happen in their lives.</p>
    <h3>Traits</h3>
    <ol>
        <li> Feelings. Dramatic men and women live in an emotional world. They are sensation oriented, emotionally
            demonstrative, and physically affectionate. They react emotionally to events and can shift quickly from mood to
            mood.
        </li>
        <li> Color. They experience life vividly and expansively. They have rich imaginations, they tell entertaining
            stories, and they are drawn to romance and melodrama.
        </li>
        <li> Attention. Dramatic people like to be seen and noticed. They are often the center of attention, and they rise
            to the occasion when all eyes are on them.
        </li>
        <li> Appearance. They pay a lot of attention to grooming, and they enjoy clothes, style, and fashion.
        </li>
        <li> Sexual attraction. In appearance and behavior, Dramatic individuals enjoy their sexuality. They are seductive,
            engaging, charming tempters and temptresses.
        </li>
        <li> Engagement. Easily putting their trust in others, they are able to become quickly involved in relationships.
        </li>
        <li> The spirit is willing. People with Dramatic personality style eagerly respond to new ideas and suggestions from
            others.
        </li>
    </ol>`,
    `<h2>Self-Confident</h2>
    <h3>Star Quality</h3>
    <p>Self-Confident individuals stand out. They're the leaders, the shining lights, the attention-getters in their public
        or private spheres. Theirs is a star quality born of self-regard, self-respect, self-certainty—all those self words
        that denote a faith in oneself and a commitment to one's self-styled purpose. Combined with the ambition that marks
        this style, that magical self-regard can transform idle dreams into real accomplishment.
    
        The Self-Confident personality style is one of the two most goal-directed of all fourteen (the other is the
        Aggressive style). Self-Confident men and women know what they want, and they get it. Many of them have the charisma
        to attract plenty of others to their goals. They are extroverted and intensely political. They know how to work the
        crowd, how to motivate it, and how to lead it. Hitch on to their bandwagons, and you'll be well rewarded.
    
        The Self-Confident style adds go-getting power to other personality styles. For example, it counteracts the
        Conscientious person's tendency to get sidetracked by details, and it fuels the Adventurous person's great feats of
        daring. It propels any personality pattern into the realm of success. Indeed, the Self-Confident style confers an
        ability to be successful more than any but the Aggressive personality style.</p>
    <h3>Traits</h3>
    <ol>
        <li> Self-regard. Self-Confident individuals believe in themselves and in their abilities. They have no doubt that
            they are unique and special and that there is a reason for their being on this planet.
        </li>
        <li> The red carpet. They expect others to treat them well at all times.
        </li>
        <li> Ambition. Self-Confident people are unabashedly open about their aspirations and possibilities.
        </li>
        <li> Politics. They are able to take advantage of the strengths and abilities of other people in order to achieve
            their goals, and they are shrewd in their dealings with others.
        </li>
        <li> Competition. They are able competitors, they love getting to the top, and they enjoy staying there.
        </li>
        <li> Stature. They identify with people of high rank and status.
        </li>
        <li> Dreams. Self-Confident individuals are able to visualize themselves as the hero, the star, the best in their
            role, or the most accomplished in their field.
        </li>
        <li> Self-awareness. These individuals have a keen awareness of their thoughts and feelings and their overall inner
            state of being.
        </li>
        <li> Poise. People with the Self-Confident personality style accept compliments, praise, and admiration gracefully
            and with self-possession.</li>
    </ol>`,
    `<h2>Sensitive</h2>
    <h3>The Homebody</h3>
    <p>Sensitive people come into possession of their powers when their world is small and they know the people in it. For
        this commonly occurring personality style, familiarity breeds comfort, contentment, and inspiration. These men and
        women—although they avoid a wide social network and shun celebrity—can achieve great recognition for their
        creativity. Nestled in an emotionally secure environment, with a few dear family members or friends, the Sensitive
        style's imagination and spirit of exploration know no bounds. With their minds, feelings, and fantasies, Sensitive
        people find freedom.</p>
    <h3>Traits</h3>
    <ol>
        <li> Familiarity. Individuals with the Sensitive personality style prefer the known to the unknown. They are
            comfortable with, even inspired by, habit, repetition, and routine.
        </li>
        <li> Concern. Sensitive individuals care deeply about what other people think of them.
        </li>
        <li> Circumspection. They behave with deliberate discretion in their dealings with others. They do not make hasty
            judgments or jump in before they know what is appropriate.
        </li>
        <li> Polite reserve. Socially they take care to maintain a courteous, self-restrained demeanor.
        </li>
        <li> Role. They function best in scripted settings, vocationally and socially: when they know precisely what is
            expected of them, how they are supposed to relate to others, and what they are expected to say.
        </li>
        <li>Privacy. Sensitive men and women are not quick to share their innermost thoughts and feelings with others, even
            those they know well.</li>
    </ol>`,
    `<h2>Devoted</h2>
    <h3>The Good Mate</h3>
    <p>Devoted types care, and that's what makes their lives worth living. You won't find anyone more loving, more
        solicitous of you, more concerned for your needs and feelings or for those of the group as a whole. At their best,
        individuals with this style are the loyal, considerate, ever-so-helpful players on the team—whether it is the
        couple, the family, the assembly line, the department, the religious or charitable organization, or the military
        unit. Their needs are those of the group or of its leader, and their happiness comes from the fulfillment of the
        others' directives and goals. Devoted people are the ones who tell you, \"I'm happy if you're happy\"—and mean it.
    
        The Devoted style is common in our society, and it occurs among both men and women. Traditionally this helping and
        giving personality style has been particularly encouraged and approved among women. The customary view of the good
        wife has been that of a tender-hearted Devoted woman who lives through her husband and relies on him to make the
        worldly decisions for her, while she dedicates herself to providing a fulfilling home life for the family. As views
        of women's roles change in this society, some women with this personality style may have mixed feelings about
        expressing it. Because of today's cultural pressures on women to step out of the shadows of other people, both in
        and out of the home, they may feel that wanting to make someone else happy is something to be ashamed of. While
        these women struggle to come to terms with all sides of their personality patterns, more men are feeling freer to
        enjoy their own domestic, nurturing Devoted tendencies. In any case, as we will see throughout this chapter, the
        Devoted personality plays itself out in many ways in the personality profiles of males as well as females,
        traditional and otherwise.</p>
    <h3>Traits</h3>
    <ol>
        <li> Commitment. Individuals with the Devoted personality style are thoroughly dedicated to the relationships in
            their lives. They place the highest value on sustained relationships, they respect the institution of marriage
            as well as unofficial avowals of commitment, and they work hard to keep their relationships together.
        </li>
        <li> Togetherness. They prefer the company of one or more people to being alone.
        </li>
        <li> Teamwork. People with this personality style would rather follow than lead. They are cooperative and respectful
            of authority and institutions. They easily rely on others and take direction well.
        </li>
        <li> Deference. When making decisions, they are happy to seek out others' opinions and to follow their advice.
        </li>
        <li> Harmony. Devoted individuals are careful to promote good feelings between themselves and the important people
            in their lives. To promote harmony, they tend to be polite, agreeable, and tactful.
        </li>
        <li> Consideration. They are thoughtful of others and good at pleasing them. Devoted people will endure personal
            discomfort to do a good turn for the key people in their lives.
        </li>
        <li> Attachment. Relationships provide life's meaning for this personality style. Even after a painful loss of
            someone around whom their life was centered, they are able to form new meaningful bonds.</li>
    </ol>`,
    `<h2>Conscientious</h2>
    <h3>The Right Stuff</h3>
    <p>Call them the backbone of America. Conscientious-style people are the men and women of strong moral principle and
        absolute certainty, and they won't rest until the job is done and done right. They are loyal to their families,
        their causes, and their superiors. Hard work is a hallmark of this personality style; Conscientious types achieve.
        No accomplished doctor, lawyer, scientist, or business executive could get far without a substantial amount of
        Conscientious style in his or her personality pattern. Neither could a computer whiz, an efficient housekeeper, an
        accountant, a straight-A student, a good secretary—or anyone else who works hard to do well.
    
        The Conscientious personality style flourishes within cultures such as ours in which the work ethic thrives.
        Conscientious traits—hard work, prudence, conventionality—may even confer a longevity advantage. The Conscientious
        style is adaptable, common, and thus likely to be a principal component of many diverse personality profiles.
        Indeed, within our society so wide a range of Conscientious behaviors is considered normal, even admirable, that it
        may be hard to draw the line between the Conscientious personality style and the Obsessive-Compulsive personality
        disorder that marks its extreme. What are we to say about the man or woman who always takes a briefcase filled with
        work along on vacation? Is he or she a workaholic who can't relax and is headed for an early heart attack? Or is
        this a person who loves to work, thrives on challenge, and is bound for great things in his or her career? That
        depends on whether the style enriches the six domains of this person's life or controls and distorts them.</p>
    <h3>Traits</h3>
    <ol>
        <li> Hard work. The Conscientious person is dedicated to work, works very hard, and is capable of intense, single-minded effort.
        </li><li> The right thing. To be Conscientious is to be a person of conscience. These are men and women of strong moral principles and values. Opinions and beliefs on any subject are rarely held lightly. Conscientious individuals want to do the right thing.
        </li><li> The right way. Everything must be done “right,” and the Conscientious person has a clear understanding of what that means, from the correct way to balance the checkbook, to the best strategy to achieve the boss's objectives, to how to fit every single dirty dish into the dishwasher.
        </li><li> Perfectionism. The Conscientious person likes all tasks and projects to be complete to the final detail, without even minor flaws.
        </li><li> Perseverance. They stick to their convictions and opinions. Opposition only serves to strengthen their dogged determination.
        </li><li> Order and detail. Conscientious people like the appearance of orderliness and tidiness. They are good organizers, catalogers, and list makers. No detail is too small for Conscientious consideration.
        </li><li> Prudence. Thrifty, careful, and cautious in all areas of their lives, Conscientious individuals do not give in to reckless abandon or wild excess.
        </li><li> Accumulation. A “pack rat,” the Conscientious person saves and collects things, reluctant to discard anything that has, formerly had, or someday may have value for him or her.</li>
    </ol>`,
    `<h2>Leisurely</h2>
    <h3>California Dreaming</h3>
    <p>Free to be me - no one can take away this right from a person who has a Leisurely personality style. These men and women play by the rules and fulfill their responsibilities and obligations. But once they've put in their time, they will let no person, institution, or even culture deprive them of their personal pursuit of happiness, for to the Leisurely person this is what life is all about. Some Leisurely individuals find their happiness through creative pursuits, some by relaxing with a good book. What's important to them is not how they choose to enjoy themselves but that they are guaranteed this opportunity. If threatened, these normally easygoing individuals will vigorously defend their fundamental right to do their \"own thing\".</p>
    <h3>Traits</h3>
    <ol>
        <li> Inalienable rights. Leisurely men and women believe in their right to enjoy themselves on their own terms in their own time. They value and protect their comfort, their free time, and their individual pursuit of happiness.
        </li><li> Enough is enough. They agree to play by the rules. They deliver what is expected of them and no more. They expect others to recognize and respect that limit.
        </li><li> The right to resist. Leisurely individuals cannot be exploited. They can comfortably resist acceding to demands that they deem unreasonable or above and beyond the call of duty.
        </li><li> Mañana. Leisurely men and women are relaxed about time. Unlike Type-A individuals, they are not obsessed by time urgency or the demands of the clock. To these individuals, haste makes waste and unnecessary anxiety. They are easygoing and optimistic that whatever needs to get done will get done, eventually.
        </li><li> I'm okay. They are not overawed by authority. They accept themselves and their approach to life.
        </li><li> Wheel of fortune. Leisurely people believe that they are just as good as everyone else and as entitled to the best things in life. They maintain that blind luck often accounts for who fares well and who fares poorly.
        </li><li> Mixed feelings. Although they feel impelled to proceed in their own direction, when their choices put them in conflict with the people they care for, Leisurely people are often of two minds about how to proceed. They do not like to risk important relationships, yet they need to feel free.</li>
    </ol>`,
    `<h2>Aggressive</h2>
    <h3>Top Dog</h3>
    <p>Who's the boss? The Aggressive type, of course. While others may aspire to leadership, Aggressive men and women move instinctively to the helm. They are born to assume command as surely as is the top dog in the pack. Theirs is a strong, forceful personality style, more inherently powerful than any of the others. They can undertake huge responsibilities without fear of failure. They wield power with ease. They never back away from a fight. They compete with the supreme confidence of champions.
    
        How these individuals use the power that seems always at their fingertips depends on other styles in their patterns. When put to the service of the greater good, the Aggressive personality style can inspire a man or woman to great leadership, especially in times of crisis.</p>
    <h3>Traits</h3>
    <ol>
        <li> Command. Aggressive individuals take charge. They are comfortable with power, authority, and responsibility.
        </li><li> Hierarchy. They operate best within a traditional power structure where everyone knows his or her place and the lines of authority are clear.
        </li><li> Tight ship. They are highly disciplined and impose rules of order that they expect others in their charge to follow.
        </li><li> Expedience. Aggressive men and women are highly goal-directed. They take a practical, pragmatic approach to accomplishing their objectives. They do what is necessary to get the job done.
        </li><li> Guts. They are neither squeamish nor fainthearted. They can function well and bravely in difficult and dangerous situations without being distracted by fear or horror.
        </li><li> The rough-and-tumble. Aggressive people like action and adventure. They are physically assertive and often participate in or enjoy playing competitive sports, especially contact sports.</li>
    </ol>`,
    `<h2>Self-Sacrificing</h2>
    <h3>The Altruist</h3>
    <p>To live is to serve; to love is to give. These are axioms for individuals who have the Self-Sacrificing personality style. The way they see it, their needs can wait until others' are well served. Knowing that they have given of themselves, they feel comfortable and at peace, secure with their place in the scheme of things. At its best and most noble, this is the selfless, magnanimous personality style of which saints and good citizens are made.</p>
    <h3>Traits</h3>
    <ol>
        <li> Generosity. Individuals with the Self-Sacrificing personality style will give you the shirts off their backs if you need them. They do not wait to be asked.
        </li><li> Service. Their “prime directive” is to be helpful to others. Out of deference to others, they are noncompetitive and unambitious, comfortable coming second, even last.
        </li><li> Consideration. Self-Sacrificing people are always considerate in their dealings with others. They are ethical, honest, and trustworthy.
        </li><li> Acceptance. They are nonjudgmental, tolerant of others' foibles, and never harshly reproving. They'll stick with you through thick and thin.
        </li><li> Humility. They are neither boastful nor proud, and they're uncomfortable being fussed over. Self-Sacrificing men and women do not like being the center of attention; they are uneasy in the limelight.
        </li><li> Endurance. They are long-suffering. They prefer to shoulder their own burdens in life. They have much patience and a high tolerance for discomfort.
        </li><li> Artlessness. Self-Sacrificing individuals are rather naive and innocent. They are unaware of the often deep impact they make on other people's lives, and they tend never to suspect deviousness or underhanded motives in the people to whom they give so much of themselves.</li>
    </ol>`,
    `<h2>Serious</h2>
    <h3>The Realist</h3>
    <p>Serious men and women suffer no illusions. They don't hitch their wagons to a star, count their chickens before they're hatched, sing that life is just a bowl of cherries, or don rose-colored glasses to paint their existence in a more beguiling hue. Even when things are not so pleasant, they see them as they are. Of course, since the current culture favors individuals who “think positive,” look on the bright side, and attempt always to improve themselves, somebody with Serious style may not exactly fit the image. But Serious people don't expect to be popular.
    
        What they sacrifice in silver linings, they gain in ability to carry on in even the worst of circumstances. No other personality style is quite so able to endure when a harsh climate seems to descend on the planet. This is a no-frills, no-nonsense, just-do-it personality style, whose strength in hard times can help everyone to survive. Like many of the other personality styles, it is one where a little goes a long way.</p>
    <h3>Traits</h3>
    <ol>
        <li> Straight face. Individuals with the Serious personality style maintain a sober demeanor. They are solemn and not given to emotional expression.
        </li><li> No pretentions. They are realistically aware of their own capabilities, but they are also aware of their own limitations; they are not tempted by vanity or self-importance.
        </li><li> Accountability. Serious people hold themselves responsible for their actions. They will not soft-pedal their own faults and do not let themselves off the hook.
        </li><li> Cogitation. They're thinkers, analyzers, evaluators, ruminators: They'll always play things over in their minds before they act.
        </li><li> Nobody's fool. Men and women with Serious personality style are sharp appraisers of others. In their ability to critique other people, they are as unhesitating as in their own self-evaluation.
        </li><li> No surprises. They anticipate problems and when the worst happens, they're prepared to deal with it.
        </li><li> Contrition. Serious people suffer greatly when they realize they've been thoughtless or impolite to others.</li>
    </ol>`
]
var questions = JSON.parse(qtext).sort(function(){return Math.random() - 0.5}); //Yes, this is bad, but the randomness doesn't have to be strong

var n = -1;
var scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

wrap_fill = function(){
	switch($('input[name=form]:checked', '#form').val()){
		case "1":
            if (questions[n]["reverse"]) {
                scores[questions[n]["score"] - 1] += 2;
            }
			break;
		case "2":
			scores[questions[n]["score"] - 1] += 1;
            if (questions[n]["double"]) {
                scores[2] += 1;
            }
			break;
		case "3":
			scores[questions[n]["score"] - 1] += 2;
            if (questions[n]["reverse"]) {
                scores[questions[n]["score"] - 1] -= 2;
            }
            if (questions[n]["double"]) {
                scores[2] += 2;
            }
			break;
		default:
	}
	n++;
	if (n<Object.keys(questions).length) {
		form_fill(n);
	} else {
		display_results();
	}
};



form_fill = function(i){
    var btn_class;
    if ($(document).width() > 640){
        btn_class="btn-group"
    } else {
        btn_class="btn-group-vertical"
    }
	$("form").html(`<h2 class="fs-6 mb-4">` + questions[i]["question"] + `</h2>
<div class="`+ btn_class + `" role="group" aria-label="Likert Scale">
  <input type="radio" class="btn-check" name="form" id="1" value="1" autocomplete="off" onclick="wrap_fill()">
  <label class="btn btn-outline-primary" for="1">No</label>

  <input type="radio" class="btn-check" name="form" id="2" value="2" autocomplete="off" onclick="wrap_fill()">
  <label class="btn btn-outline-primary" for="2">Maybe</label>

  <input type="radio" class="btn-check" name="form" id="3" value="3" autocomplete="off" onclick="wrap_fill()">
  <label class="btn btn-outline-primary" for="3">Yes</label>
</div>`)
};



display_results = function(){
    var normalised = new Array(14);
    for (i=0;i<14;i++){
        normalised[i] = scores[i] * 100 / max [i];
    }
    var norm_edited = [...normalised];
    var order = new Array(14);
    var html;
    for (i=0;i<14;i++){
        order[i] = norm_edited.indexOf(Math.max(...norm_edited));
        norm_edited[order[i]] = -1; //Removes max to avoid repeats
    }
    html = "<h2>Your results</h2> <ul>"
    for (i=0;i<14;i++){
        html = html + "<li><strong>" + names[i] + ":</strong> " + normalised[i].toFixed(1) + "% </li>"
    }
	$("#form").html(html);

    $("#form").after("<div id=\"" + names[order[0]] + "\"class=\"card mt-3 p-3\">" + text[order[0]]+ "</div>" + "<div id=\"" + names[order[1]] + "\"class=\"card mt-3 p-3 \">" + text[order[1]]+ "</div>" + "<div id=\"" + names[order[2]] + "\"class=\"card mt-3 p-3 \">" + text[order[2]]+ "</div>" + "<div id=\"" + names[order[3]] + "\"class=\"card mt-3 p-3 \">" + text[order[3]]+ "</div>" + "<div id=\"" + names[order[4]] + "\"class=\"card mt-3 p-3 \">" + text[order[4]]+ "</div>");
};
desc_fill = function(){
    $("#form").html("<h1>Oldham Styles</h1>");
    $("#form").after("<div id=\"" + names[0] + "\"class=\"card mt-3 p-3\">" + text[0]+ "</div>")
    for (i=0;i<13;i++){
        $("#"+names[i]).after("<div id=\"" + names[i+1] + "\"class=\"card mt-3 p-3\">" + text[i+1]+ "</div>");
    }
};

$(document).ready(function(){
	$("#form").html(`<h2>Welcome to the Oldham test!</h2>
	<p>You will be presented with 107 questions. Choose "Yes" if you agree with the whole statement, "Maybe" if you partly agree or agree with one part of a two-part statement, and "No" if you disagree with the whole statement.</p>
		<input type="button" class="btn btn-primary my-3" value="Start" onclick="wrap_fill()">
        <input type="button" class="btn btn-primary my-3" value="Show Descriptions" onclick="desc_fill()"> `)
});
