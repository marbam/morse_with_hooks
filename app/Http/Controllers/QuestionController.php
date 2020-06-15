<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Faker;
use DB;

class QuestionController extends Controller
{
    public function getQuestion(Request $request) {
        $numberOfQuestions = $request[0];
        $questions = [];
        for ($q = 1; $q <= $numberOfQuestions; $q++) {
            $questions[] = $this->generateQuestion();
        }
        return $questions;
    }

    public function generateQuestion() {
        $faker = Faker\Factory::create();
        $sentence = strtoupper($faker->realText(30, 1));
        $sentence = $this->removePunctuation($sentence);
        $sentenceArray = str_split($sentence);
        $translations = DB::table('morse_letters')->pluck('morse_code', 'letter');
        $answer = [];
        foreach($sentenceArray as $letter) {
            if (isset($translations[$letter])) {
                $answer[] = [$letter => $translations[$letter]];
            }
        }
        return $answer;
    }

    public function removePunctuation($sentence) {
        return str_replace(" ", "", $sentence);
    }
}
