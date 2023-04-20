---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title:  "Awakening in Nihil"
categories: landing home page awakening rules mechanics
---

The world of Nihil is unraveling, exposing a horrible truth behind the wires and chrome of the endless metropolises. The streets of decay and abandoned buildings are the facade of an invisible prison woven over us. We dream with our eyes open, a veil cast upon us from within the walls of steel and boundless technology crafted and enchanted by stolen and hidden magics. 

The otherworldly rulers of this artificial world disguise themselves as corporate executives, bestowing luxuries and suffering in equal measure to ensure humanity never awakens to their secret origin and lichdom. They wield humanity as disposable tools, to be handled like weapons and pawns upon a battlefield funded by their own corporations. Yet these necrotic demigods are not without weakness, as the magic they wield to bind and control reality has mysteriously begun to stir individuals from their arcane slumber. 

Those who awaken to the presence of magic possess the power to oppose these undead reality shapers, but must avoid detection or capture at all costs, as the punishment for open defiance is an eternity of lifeless servitude. And while too many mages have already succumbed to this terrible fate, the hidden war for reality continues from the shadows, as only these rebellious mages stand a chance of taking control of this dystopic reality and ending humanity's collective nightmare. 

# How to Play Somnihil
Somnihil is a roleplaying game powered by [Quest](https://www.adventure.game/) that assembles a group of players to take on the roles of Ciphers, newly awakened mages living in a cyber dystopia steeped in covert corporate warfare and secret arcane rebellion. A single storyteller, called the Chronicler, will collaborate with players to imagine the landscape and encounters that each Cipher will discover during each session. 

### Rules and Mechanics
{% assign rules-posts = site.rules | sort: 'order' %}
{% for post in rules-posts %}
  <li {% if page.url == post.url %} class="active"{% endif %}>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}


### Character Creation  
{% assign protocol-scenario-guide = site.magic | where: "title", "Protocal Scenario Guide" | first %}
 <li>
    <a href="{{ protocol-scenario-guide.url }}">{{ protocol-scenario-guide.title }}</a>
  </li>


## Cybernetics 
*In Development*

## Gear 
*In Development*



</ul>