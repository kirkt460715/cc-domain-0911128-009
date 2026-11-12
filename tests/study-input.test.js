import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { Scenario } from '../ward_calendar/model.js';
test('研究需求支持集与病区引用有效',()=>{
  const d=JSON.parse(readFileSync(new URL('../fixtures/study-input.json',import.meta.url),'utf8'));
  new Scenario(d.scenario);
  assert.equal(d.study.arrival_grid.length,d.study.arrival_weights.length);
  assert.equal(d.profile.stay.length,d.study.tilted_stay_weights.length);
  assert.ok(d.study.arrival_grid.every(x=>x>=0 && x<d.scenario.horizon));
  assert.ok(d.study.arrival_weights.every(x=>x>0));
  assert.ok(d.study.tilted_arrival_weights.every(x=>x>0));
});
