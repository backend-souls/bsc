import { describe, it, expect } from 'vitest';

import { Event, createDefaultEvent } from 'src/domain';
import { generateRandomId } from 'src/datatypes';

describe('Events', () => {
  it('should create a default Event with fields defined in the RFC-8984', () => {
    const event: Event = createDefaultEvent(
      new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) // 7 days from now
    );

    expect(event).not.toBeNull();
    expect(event).not.toBeUndefined();

    expect(event.uid).not.toBe('');
    expect(event.uid).not.toBeNull();
    expect(event.uid).not.toBeUndefined();
  });

  it('should create Event with required fields', () => {
    const event: Event = {
      '@type': 'Event',
      uid: generateRandomId(),
      updated: new Date(),
      start: new Date(),
    };

    expect(event).not.toBeNull();
    expect(event).not.toBeUndefined();

    expect(event.uid).not.toBe('');
    expect(event.uid).not.toBeNull();
    expect(event.uid).not.toBeUndefined();
  });
});
