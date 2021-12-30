/** @format */

import mongoose from 'mongoose';

const PronounType = new mongoose.Schema({
	pronoun: String,
	isNeo: Boolean,
	about: String,
});

const PronounSchema = new mongoose.Schema({
	canonicalName: String,
	name: String,
	description: String,
	language: String,
	normative: Boolean,
	plural: Boolean,
	morphemes: {
		subject: String,
		object: String,
		possessiveDeterminer: String,
		possessive: String,
		reflexive: String,
	},
	examples: [String],
	similarTo: [String],
});

export const Pronoun = mongoose.model('pronoun', PronounSchema);