/*
 * Copyright 2016 Telefonica Investigación y Desarrollo, S.A.U
 *
 * This file is part of iotagent-mqtt
 *
 * iotagent-mqtt is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * iotagent-mqtt is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with iotagent-mqtt.
 * If not, seehttp://www.gnu.org/licenses/.
 *
 * For those usages not covered by the GNU Affero General Public License
 * please contact with::[contacto@tid.es]
 */

'use strict';

module.exports = {
    MEASURES_SUFFIX: 'attrs',
    CONFIGURATION_COMMAND_SUFFIX: 'cmdexe',
    CONFIGURATION_VALUES_SUFFIX: 'values',

    DATE_FORMAT: 'yyyymmdd\'T\'HHMMss\'Z\'',

    TIMESTAMP_ATTRIBUTE: 'TimeInstant',
    TIMESTAMP_TYPE: 'ISO8601',

    HTTP_MEASURE_PATH: '/iot/d',

    DEFAULT_ATTRIBUTE_TYPE: 'string',

    COMMAND_STATUS_PENDING: 'PENDING',
    COMMAND_STATUS_ERROR: 'ERROR',
    COMMAND_STATUS_COMPLETED: 'OK'
};
