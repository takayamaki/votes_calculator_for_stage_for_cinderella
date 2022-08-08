/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/preact-hooks';
import { useCharctorSort } from '.';

xdescribe('useCharctorSort', () => {
  it('statusの初期値はsorting', () => {
    const result = renderHook(() => useCharctorSort({ candicates: ['hoge'] })).result;
    expect(result.current?.status).toBe('sorting');
  });
});
