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
    var btn_class
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
        normalised[i] = scores[i] * 100 / max [i]
    }
    var html
    html = "<h2>Your results</h2> <ul>"
    for (i=0;i<14;i++){
        html = html + "<li><strong>" + names[i] + ":</strong> " + normalised[i].toFixed(1) + "% </li>"
    }
	$("#form").html(html);
};

$(document).ready(function(){
	$("#form").html(`<h2>Welcome to the Oldham test!</h2>
	<p>You will be presented with 107 questions. Choose "Yes" if you agree with the whole statement, "Maybe" if you partly agree or agree with one part of a two-part statement, and "No" if you disagree with the whole statement.</p>
		<input type="button" class="btn btn-primary my-3" value="Start" onclick="wrap_fill()"> `)
});
