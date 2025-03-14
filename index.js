﻿/* -*- tab-width: 2 -*- */
'use strict';

const getOwn = require('getown');


function vari(v) { return String.fromCodePoint(0xFE00 + (v - 1)); } /*
  Unicode variation selectors 1..16 = U+FE00..U+FE0F.
  The subtraction in parens ensures Number type if v isn't. */

const u = {
  axe: '🪓',
  bamumLetterPhaseDYen: '𖤍',
  bomb: '💣',
  broom: '🧹',
  carpentrySaw: '🪚',
  chains: '⛓',
  chair: '🪑',
  cookie: '🍪',
  crossMark: '❌',
  electricLightBulb: '💡',
  fire: '🔥',
  fish: '🐟',
  floppyDisk: '💾',
  gear: '⚙',
  bamumLetterPhaseENgkaami: '𖦹',
  globeWithMeridians: '🌐',
  hammerAndWrench: '🛠',
  hourglassWithFlowingSand: '⏳',
  hundredPointsSymbol: '💯',
  javaneseLeftRerenggan: '꧁',
  javaneseRightRerenggan: '꧂',
  label: '🏷',
  link: '🔗',
  lock: '🔒',
  memo: '📝',
  multipleMusicalNotes: '🎶',
  nameBadge: '📛',
  noEntry: '⛔',
  noEntrySign: '🚫',
  northEastArrow: '↗',
  octagonalSign: '🛑',
  openLock: '🔓',
  partyPopper: '🎉',
  policeOfficer: '👮',
  railwayTrack: '🛤',
  rainbow: '🌈',
  rocket: '🚀',
  scales: '⚖',
  shield: '🛡',
  shootingStar: '🌠',
  shrug: '🤷',
  sparkles: '✨',
  stethoscope: '🩺',
  thumbsDownSign: '👎',
  thumbsUpSign: '👍',
  trophy: '🏆',
  warningSign: '⚠',
  wastebasket: '🗑',
  whiteHeavyCheckMark: '✅',
  wood: '🪵',
};

const emoji = {
  hammerAndWrench: u.hammerAndWrench + vari(16),
  pencil: u.memo,
  scalesOfJustice: u.scales + vari(16),
  unlock: u.openLock,
};


const customAdditionsAndPlaceholders = {
  chainsaw: u.carpentrySaw, // actual chainsaw isn't in yet :-(
  swirl: u.bamumLetterPhaseENgkaami,
  trash: u.wastebasket,
  wireframeAngel: u.bamumLetterPhaseDYen,
};


const EX = function loopkup(name) {
  const c = (getOwn(emoji, name) || getOwn(u, name)
    || getOwn(customAdditionsAndPlaceholders, name));
  if (c) { return c; }
  throw new Error('Attempt to use undefined emoji name: ' + name);
};

Object.assign(EX, {
  customAdditionsAndPlaceholders,
  emoji,
  unicode: u,
  vari,
});





module.exports = EX;
