/** @format */

import { Pronoun, User } from '../../models';
import { KEY as masterKey } from '../../src/vars';
import bcrypt from 'bcrypt';

export const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		getPronouns: async () => {
			return await Pronoun.find();
		},
		getPronoun: async (_root, { id }) => {
			return await Pronoun.findById(id);
		},
		getUsers: async () => {
			return await User.find();
		},
	},
	Mutation: {
		createPronoun: async (_parent, args) => {
			if (args.KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
				const {
					canonicalName,
					name,
					description,
					language,
					normative,
					plural,
					morphemes,
					examples,
					similarTo,
				} = args.pronoun;
				const pronoun = new Pronoun({
					canonicalName,
					name,
					description,
					language,
					normative,
					plural,
					morphemes,
					examples,
					similarTo,
				});
				await pronoun.save();
				return pronoun;
			}
		},

		deletePronoun: async (_parent, { KEY, id }) => {
			if (KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
				await Pronoun.findByIdAndRemove(id);
				return `Pronoun deleted (id: ${id})`;
			}
		},

		updatePronoun: async (_parent, { id, pronoun, KEY }) => {
			if (KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
				const {
					canonicalName,
					name,
					description,
					language,
					normative,
					plural,
					morphemes,
					examples,
					similarTo,
				} = pronoun;

				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const updates: any = {};
				if (canonicalName !== undefined) {
					updates.canonicalName = canonicalName;
				}
				if (name !== undefined) {
					updates.name = name;
				}
				if (description !== undefined) {
					updates.description = description;
				}
				if (language !== undefined) {
					updates.language = language;
				}
				if (normative !== undefined) {
					updates.normative = normative;
				}
				if (plural !== undefined) {
					updates.plural = plural;
				}
				if (morphemes !== undefined) {
					updates.morphemes = morphemes;
				}
				if (examples !== undefined) {
					updates.examples = examples;
				}
				if (similarTo !== undefined) {
					updates.similarTo = similarTo;
				}

				const updatedPronoun = await Pronoun.findByIdAndUpdate(
					id,
					updates,
					{ new: true }
				);

				return updatedPronoun;
			}
		},
		createUser: async (_parent, args) => {
			if (args.KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
				const { username, displayName, email, pronouns } = args.user;

				let { isAdmin, isModerator } = args.user;
				if (isAdmin === undefined) {
					isAdmin = false;
				}
				if (isModerator === undefined) {
					isModerator = false;
				}
				if (username === undefined || '') {
					throw new Error('Username is required');
				} else if (displayName === undefined || '') {
					throw new Error('Display name is required');
				} else {
					const user = new User({
						username,
						displayName,
						email,
						pronouns,
						isAdmin,
						isModerator,
					});
					await user.save();
					return user;
				}
			}
		},
		deleteUser: async (_parent, { KEY, id }) => {
			if (KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
				await User.findByIdAndRemove(id);
				return `User deleted (id: ${id})`;
			}
		}
	},
};
