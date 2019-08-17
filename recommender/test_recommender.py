from unittest.mock import MagicMock
import sqlalchemy
sqlalchemy.create_engine = MagicMock()

from application import app
import pytest
from recommender import get_ml_recommendations

@pytest.fixture
def client():
    app.config['TESTING'] = True
    client = app.test_client()
    yield client
def test_empty_db(client):
    """Start with a blank database."""
    rv = client.get('/')
    assert b'movie' in rv.data
