Feature: Hello Everywhere
	As a traveler
	In order to say hi to someone in a country
	I want to know the sentence to say in the local language

	Scenario: Say hi in England
		Given I am in England
		And My name is Cyril
		When I ask for a hello sentence
		Then I should say hi, my name is Cyril!

	Scenario: Say hi in France
		Given I am in France
		And My name is Vold
		When I ask for a hello sentence
		Then I should say bonjour, mon nom est Vold!

	Scenario Outline: Say hi
		Given I am in <country>
		And My name is <name>
		When I ask for a hello sentence
		Then I should say <sentence>

		Examples:
		    | country | name    | sentence                    |
		    | France  | Roger   | bonjour, mon nom est Roger! |
		    | England | Rabbit  | hi, my name is Rabbit!      |
