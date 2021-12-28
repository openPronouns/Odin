/** @format */

import mongoose from 'mongoose';

const PronounType = new mongoose.Schema({
	pronoun: String,
	isNeo: Boolean,
	about: String,
});

const PronounSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: true,
	},
	en_pronoun: {
		type: PronounType,
		required: false,
	},
	es_pronoun: {
		type: PronounType,
		required: false,
	},
	fr_pronoun: {
		type: PronounType,
		required: false,
	},
	it_pronoun: {
		type: PronounType,
		required: false,
	},
	pt_pronoun: {
		type: PronounType,
		required: false,
	},
	eo_pronoun: {
		type: PronounType,
		required: false,
	},
});

export const Pronoun = mongoose.model('pronoun', PronounSchema);