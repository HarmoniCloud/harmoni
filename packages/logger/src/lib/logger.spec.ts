import { logger } from './logger';

describe('logger', () => {
  it('shoule be defined', () => {
    expect(logger).toBeDefined();
  });

  it('should be able to log', () => {
    const spy = jest.spyOn(console, 'log');

    logger.info('test');

    expect(spy.mock.calls[0][0]).toContain('test');
  });
});
