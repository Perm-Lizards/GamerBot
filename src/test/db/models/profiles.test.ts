import { Context, createMockContext, MockContext } from '../context';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test('test: create profile', () => {});

test('test: read profile', () => {});

test('test: update profile', () => {});

test('test: delete profile', () => {});
