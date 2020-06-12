<?php

use Illuminate\Database\Seeder;

class MorseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $letters = [];
        $letters["A"] = '• −';
        $letters["B"] = '− • • •';
        $letters["C"] = '− • − •';
        $letters["D"] = '− • •';
        $letters["E"] = '•';
        $letters["F"] = '• • − •';
        $letters["G"] = '− − •';
        $letters["H"] = '• • • •';
        $letters["I"] = '• •';
        $letters["J"] = '• − − −';
        $letters["K"] = '− • −';
        $letters["L"] = '• − • •';
        $letters["M"] = '− −';
        $letters["N"] = '− •';
        $letters["O"] = '− − −';
        $letters["P"] = '• − − •';
        $letters["Q"] = '− − • −';
        $letters["R"] = '• − •';
        $letters["S"] = '• • •';
        $letters["T"] = '−';
        $letters["U"] = '• • −';
        $letters["V"] = '• • • −';
        $letters["W"] = '• − −';
        $letters["X"] = '− • • −';
        $letters["Y"] = '− • − −';
        $letters["Z"] = '− − • •';
        $letters["0"] = '− − − − −';
        $letters["1"] = '• − − − −';
        $letters["2"] = '• • − − −';
        $letters["3"] = '• • • − −';
        $letters["4"] = '• • • • −';
        $letters["5"] = '• • • • •';
        $letters["6"] = '− • • • •';
        $letters["7"] = '− − • • •';
        $letters["8"] = '− − − • •';
        $letters["9"] = '− − − − •';
        $letters["."] = '• − • − • −';
        $letters[","] = '− − • • − −';
        $letters[";"] = '− − − • • •';
        $letters["'"] = '• − − − − •';

        foreach($letters as $letter => $morse) {
            DB::table('morse_letters')->insert([
                'letter' => $letter,
                'morse_code' => $morse
            ]);
        }
    }
}
